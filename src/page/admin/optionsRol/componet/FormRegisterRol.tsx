import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../../../../hooks/useRegister';
import {
	UserAdminRolDTOSchema,
	UserAdminRolDTOSchemaType,
} from '../dto/UserAdminRol.dto';
import { FormRegisterRolProps } from '../sectionDataRolType';
import FormRol from './FormRol';

const FormRegisterRol = ({
	closeModal,
	handleGetData,
}: FormRegisterRolProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
		setValue,
	} = useForm<UserAdminRolDTOSchemaType>({
		resolver: zodResolver(UserAdminRolDTOSchema),
	});
	const { error, handleSubmitRegister, loading } =
		useRegister<UserAdminRolDTOSchemaType>({
			url: '/rol',
			handleGetData: handleGetData && handleGetData,
		});

	const handleDataRegisterRol = useCallback(
		(data: UserAdminRolDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, handleSubmitRegister, reset],
	);

	const handleCheck = useCallback(
		per => {
			setValue('permissions', per);
		},
		[setValue],
	);

	return (
		<FormRol
			handleSubmit={handleSubmit(handleDataRegisterRol)}
			control={control}
			error={error}
			errors={errors}
			register={register}
			loading={loading}
			handleCheck={handleCheck}
		/>
	);
};

export default FormRegisterRol;
