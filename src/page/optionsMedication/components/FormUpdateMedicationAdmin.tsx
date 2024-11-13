import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useGet from '../../../hooks/useGet';
import useUpdate from '../../../hooks/useUpdate';
import {
	UpdateMedicationAdminDTOSchema,
	UpdateMedicationAdminDTOSchemaType,
} from '../dto/formUpdateMedicationAdmin.dto';
import { DeliveryStatus } from '../enum/data';
import {
	MedicationRequest,
	MedicationRequestAdmin,
} from '../optionsMedicationProps';
import FormMedicationAdmin from './FormMedicationAdmin';
import './formRegisterMedication.scss';

const FormUpdateMedicationRequestAdmin = ({
	closeModal,
	data,
	handleGetData,
	setData,
	closeModalAction,
}: {
	closeModal: () => void;
	data: MedicationRequestAdmin | null;
	handleGetData: () => void;
	setData: React.Dispatch<React.SetStateAction<MedicationRequest | null>>;
	closeModalAction: () => void;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<UpdateMedicationAdminDTOSchemaType>({
		resolver: zodResolver(UpdateMedicationAdminDTOSchema),
	});
	const { getData } = useGet();
	const { error, loading, handleUpdate } = useUpdate({
		fetchData: handleGetData,
	});

	useEffect(() => {
		if (data) {
			reset({
				quantity: data.quantity,
				delivery_status: data.delivery_status,
				msg: data.msg || '',
				uidPharmacy: data.uidPharmacy || '',
			});
		}
	}, [data, reset]);

	const handleDataPharmacy = useCallback(async uid => {
		const { name, state, municipality, address } = await getData({
			url: `/pharmacy/one/${uid}`,
		});

		return { name, state, municipality, address };
	}, []);

	const handleSubmitData = useCallback(
		async dataUpdate => {
			if (setData)
				setData({
					...data,
					...dataUpdate,
					...(dataUpdate.uidPharmacy && {
						pharmacy: await handleDataPharmacy(dataUpdate.uidPharmacy),
					}),
				});
			handleUpdate({
				data: {
					...dataUpdate,
					quantity: +dataUpdate.quantity,
					uid: data?.uid,
				},
				closeModal: () => {
					if (dataUpdate.delivery_status === DeliveryStatus.entregado) {
						return closeModalAction(), closeModal();
					}
					return closeModal();
				},
				reset,
				url: '/medication/admin',
			});
		},
		[setData, handleUpdate, closeModal, reset, data?.uid],
	);

	return (
		<FormMedicationAdmin
			error={error}
			errors={errors}
			register={register}
			loading={loading}
			control={control}
			handleSubmit={handleSubmit(handleSubmitData)}
		/>
	);
};

export default FormUpdateMedicationRequestAdmin;
