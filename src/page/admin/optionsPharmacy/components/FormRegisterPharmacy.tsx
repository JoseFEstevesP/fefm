import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useRegister from '../../../../hooks/useRegister';
import {
	UserAdminPharmacyDTOSchema,
	UserAdminPharmacyDTOSchemaType,
} from '../dto/UserAdminPharmacy.dto';
import FormPharmacy from './FormPharmacy';

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
	} = useForm<UserAdminPharmacyDTOSchemaType>({
		resolver: zodResolver(UserAdminPharmacyDTOSchema),
	});

	const { error, handleSubmitRegister, loading } =
		useRegister<UserAdminPharmacyDTOSchemaType>({
			url: '/pharmacy',
			handleGetData: handleGetData && handleGetData,
		});

	const handleDataRegisterPharmacy = useCallback(
		(data: UserAdminPharmacyDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, handleSubmitRegister, reset],
	);
	const value = useWatch({ control });

	return (
		<FormPharmacy
			handleSubmit={handleSubmit(handleDataRegisterPharmacy)}
			control={control}
			error={error}
			errors={errors}
			register={register}
			loading={loading}
			value={value}
		/>
	);
};

export default FormRegisterUser;
