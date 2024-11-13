import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useUpdate from '../../../../hooks/useUpdate';
import {
	UserAdminMedicamentDTOSchema,
	UserAdminMedicamentDTOSchemaType,
} from '../dto/UserAdminMedicament.dto';
import FormPharmacy from './FormMedicament';

const FormUpdateMedicament = ({
	data: dataDefault,
	closeModal,
	handleGetData,
	setData,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UserAdminMedicamentDTOSchemaType>({
		resolver: zodResolver(UserAdminMedicamentDTOSchema),
	});

	const { error, handleUpdate } = useUpdate({ fetchData: handleGetData });

	useEffect(() => {
		if (dataDefault) {
			reset(dataDefault);
		}
	}, [dataDefault, reset]);

	const handleDataRegisterPharmacy = useCallback(
		(data: UserAdminMedicamentDTOSchemaType) => {
			setData({
				...dataDefault,
				...data,
			});
			handleUpdate({
				url: '/medicament',
				data: { ...dataDefault, ...data },
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, dataDefault, handleUpdate, reset, setData],
	);

	return (
		<FormPharmacy
			handleSubmit={handleSubmit(handleDataRegisterPharmacy)}
			error={error}
			errors={errors}
			register={register}
		/>
	);
};
export default FormUpdateMedicament;
