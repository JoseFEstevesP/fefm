import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContextToken } from '../../../../context/token/TokenContext';
import useGet from '../../../../hooks/useGet';
import useUpdate from '../../../../hooks/useUpdate';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../optionsRol/enum/dataRol';
import {
	UserAdminDTOSchemaType,
	UserAdminUserDTOSchema,
} from '../dto/UserAdminUser.dto';
import { Rol } from './FormRegisterUser';
import FormUser from './FormUser';

const FormUpdateUser = ({
	data: dataDefault,
	closeModal,
	handleGetData,
	setData,
}) => {
	const { token } = useContext(ContextToken);
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<UserAdminDTOSchemaType>({
		resolver: zodResolver(UserAdminUserDTOSchema),
	});

	const { error, handleUpdate } = useUpdate({ fetchData: handleGetData });

	const [rolData, setRolData] = useState<Rol[] | null>(null);
	const { getData } = useGet();
	const { handleData } = useValidate();
	const handleDataRol = useCallback(async () => {
		if (token && handleData({ per: Permission.rol })) {
			const res: Rol[] = await getData({ url: '/rol/all' });
			setRolData(res);
		}
	}, [getData, handleData, token]);

	useEffect(() => {
		if (dataDefault) {
			reset(dataDefault);
		}
	}, [dataDefault, reset]);

	useEffect(() => {
		handleDataRol();
	}, [handleDataRol]);

	const handleDataRegisterUser = useCallback(
		(data: UserAdminDTOSchemaType) => {
			setData({
				...dataDefault,
				...data,
				rol: rolData?.find(item => item.value === data.uidRol)?.label,
			});
			handleUpdate({
				url: '/user',
				data: { ...dataDefault, ...data },
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, dataDefault, handleUpdate, reset, rolData, setData],
	);

	return (
		<FormUser
			handleSubmit={handleSubmit(handleDataRegisterUser)}
			control={control}
			error={error}
			errors={errors}
			register={register}
			rolData={rolData}
		/>
	);
};
export default FormUpdateUser;
