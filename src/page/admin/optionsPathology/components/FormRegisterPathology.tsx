import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../../../../hooks/useRegister';
import {
	UserAdminPathologyDTOSchema,
	UserAdminPathologyDTOSchemaType,
} from '../dto/UserAdminPathology.dto';
import FormPathology from './FormPathology';

const FormRegisterUser = ({
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
		control,
		reset,
	} = useForm<UserAdminPathologyDTOSchemaType>({
		resolver: zodResolver(UserAdminPathologyDTOSchema),
	});

	const { error, handleSubmitRegister, loading } =
		useRegister<UserAdminPathologyDTOSchemaType>({
			url: '/pathology',
			handleGetData: handleGetData && handleGetData,
		});

	const handleDataRegisterPathology = useCallback(
		(data: UserAdminPathologyDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, handleSubmitRegister, reset],
	);

	return (
		<FormPathology
			handleSubmit={handleSubmit(handleDataRegisterPathology)}
			control={control}
			error={error}
			errors={errors}
			register={register}
			loading={loading}
		/>
	);
};

export default FormRegisterUser;
