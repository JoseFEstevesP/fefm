import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useUpdate from '../../../../hooks/useUpdate';
import {
	UserAdminPathologyDTOSchema,
	UserAdminPathologyDTOSchemaType,
} from '../dto/UserAdminPathology.dto';
import { MedicamentsLabel } from '../PathologyTypeData';
import FormPathology from './FormPathology';

const FormUpdatePathology = ({
	data: dataDefault,
	closeModal,
	handleGetData,
	setData,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<UserAdminPathologyDTOSchemaType>({
		resolver: zodResolver(UserAdminPathologyDTOSchema),
	});

	const { error, handleUpdate } = useUpdate({ fetchData: handleGetData });

	const [medical, setMedical] = useState<MedicamentsLabel[] | null>(null);

	useEffect(() => {
		if (dataDefault) {
			reset({
				...dataDefault,
				medicaments: dataDefault?.medicaments.map(item => item.uid),
			});
		}
	}, [dataDefault, reset]);

	const handleDataRegisterPathology = useCallback(
		(data: UserAdminPathologyDTOSchemaType) => {
			const medicaments = medical?.filter(item =>
				data.medicaments?.includes(item.value),
			);
			setData({
				...dataDefault,
				...data,
				medicaments: medicaments?.map(item => ({
					uid: item.value,
					name: item.label,
				})),
			});
			handleUpdate({
				url: '/pathology',
				data: { ...dataDefault, ...data },
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, dataDefault, handleUpdate, reset, setData],
	);

	return (
		<FormPathology
			handleSubmit={handleSubmit(handleDataRegisterPathology)}
			control={control}
			error={error}
			errors={errors}
			register={register}
			setMedical={setMedical}
		/>
	);
};
export default FormUpdatePathology;
