import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../../../../hooks/useRegister';
import {
	UserAdminMedicamentDTOSchema,
	UserAdminMedicamentDTOSchemaType,
} from '../dto/UserAdminMedicament.dto';
import FormPharmacy from './FormMedicament';

const FormRegisterMedicament = ({
	closeModal,
	handleGetData,
}: {
	closeModal?: () => void;
	handleGetData?: () => void;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UserAdminMedicamentDTOSchemaType>({
		resolver: zodResolver(UserAdminMedicamentDTOSchema),
	});

	const { error, handleSubmitRegister, loading } =
		useRegister<UserAdminMedicamentDTOSchemaType>({
			url: '/medicament',
			handleGetData: handleGetData && handleGetData,
		});

	const handleDataRegisterMedicament = useCallback(
		(data: UserAdminMedicamentDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, handleSubmitRegister, reset],
	);

	return (
		<FormPharmacy
			handleSubmit={handleSubmit(handleDataRegisterMedicament)}
			error={error}
			errors={errors}
			register={register}
			loading={loading}
		/>
	);
};

export default FormRegisterMedicament;
