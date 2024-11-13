import { useForm } from 'react-hook-form';
import {
	UserAdminRolDTOSchema,
	UserAdminRolDTOSchemaType,
} from '../dto/UserAdminRol.dto';
import { zodResolver } from '@hookform/resolvers/zod';
import useUpdate from '../../../../hooks/useUpdate';
import { useCallback, useEffect } from 'react';
import FormRol from './FormRol';

const FormUpdateRol = ({
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
		setValue,
	} = useForm<UserAdminRolDTOSchemaType>({
		resolver: zodResolver(UserAdminRolDTOSchema),
	});

	const { error, handleUpdate } = useUpdate({ fetchData: handleGetData });

	useEffect(() => {
		if (dataDefault) {
			reset(dataDefault);
		}
	}, [dataDefault, reset]);

	const handleDataRegisterRol = useCallback(
		(data: UserAdminRolDTOSchemaType) => {
			setData({
				...dataDefault,
				...data,
			});
			handleUpdate({
				url: '/rol',
				data: { ...dataDefault, ...data },
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, dataDefault, handleUpdate, reset, setData],
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
			defaultValue={dataDefault?.permissions}
			handleCheck={handleCheck}
		/>
	);
};
export default FormUpdateRol;
