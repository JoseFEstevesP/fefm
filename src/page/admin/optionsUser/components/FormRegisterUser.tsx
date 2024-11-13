import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Btn } from '../../../../components/button/Btn';
import { Input } from '../../../../components/input/Input';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import { fetchAxios } from '../../../../constants/axios';
import { ContextMsg } from '../../../../context/msg/MsgContext';
import { ContextToken } from '../../../../context/token/TokenContext';
import { formateError } from '../../../../functions/formaterError';
import useGet from '../../../../hooks/useGet';
import useRegister from '../../../../hooks/useRegister';
import useValidate from '../../../../hooks/useValidate';
import { system } from '../../../../systemText';
import { ErrorType } from '../../../../typeGlobal';
import { Permission } from '../../optionsRol/enum/dataRol';
import {
	ActivateCountDTOSchema,
	ActivateCountDTOSchemaType,
} from '../dto/ActivateCount.dto';
import {
	UserAdminDTOSchemaType,
	UserAdminUserDTOSchema,
} from '../dto/UserAdminUser.dto';
import FormUser from './FormUser';

export interface Rol {
	value: string;
	label: string;
}

const FormRegisterUser = ({
	closeModal,
	handleGetData,
}: {
	closeModal?: () => void;
	handleGetData?: () => void;
}) => {
	const { token } = useContext(ContextToken);
	const {
		register: registerFormUser,
		handleSubmit: handleSubmitFormUser,
		formState: { errors: errorsFormUser },
		control: controlFormUser,
		reset: resetFormUser,
	} = useForm<UserAdminDTOSchemaType>({
		resolver: zodResolver(UserAdminUserDTOSchema),
	});
	const {
		register: registerActivateCount,
		handleSubmit: handleSubmitActivateCount,
		formState: { errors: errorsActivateCount },
		reset: resetActivateCount,
	} = useForm<ActivateCountDTOSchemaType>({
		resolver: zodResolver(ActivateCountDTOSchema),
	});
	const { setMsg } = useContext(ContextMsg);
	const [errorActivateCount, setError] = useState<ErrorType | null>(null);

	const { error, handleSubmitRegister, loading } =
		useRegister<UserAdminDTOSchemaType>({
			url: token ? '/user/protect' : '/user',
			handleGetData: handleGetData && handleGetData,
		});

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
		handleDataRol();
	}, [handleDataRol]);

	const { isOpen, handleClose, handleOpen } = useModal({});

	const handleDataRegisterUser = useCallback(
		(data: UserAdminDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset: resetFormUser,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, handleSubmitRegister, resetFormUser],
	);

	const handleDataActivateCount = useCallback(
		async (data: ActivateCountDTOSchemaType) => {
			try {
				const res = await fetchAxios.post('/user/activated', data);
				setMsg(res.data.msg);
				handleClose?.();
				resetActivateCount?.();
			} catch (err: any) {
				console.error(err);
				const errorResponse = err?.response?.data as ErrorType;
				const errorMessage =
					errorResponse.errors?.find(
						err => err.property === 'uidPatients' || err.property === 'all',
					)?.message || null;

				setMsg(errorMessage);
				setError(errorResponse);
			}
		},
		[],
	);

	return (
		<>
			<Modal isOpen={isOpen} handleClose={handleClose}>
				<form onSubmit={handleSubmitActivateCount(handleDataActivateCount)}>
					<Input
						name={'code'}
						placeholder={system.code.activate}
						register={registerActivateCount}
						error={
							errorsActivateCount.code ||
							formateError({ error: errorActivateCount, name: 'code' })
						}
					/>
					<Btn
						title='Codigo de activación de cuenta'
						text='Enviar'
						type='submit'
					/>
				</form>
			</Modal>
			<FormUser
				handleSubmit={handleSubmitFormUser(handleDataRegisterUser)}
				control={controlFormUser}
				error={error}
				errors={errorsFormUser}
				register={registerFormUser}
				rolData={rolData}
				loading={loading}
				handleOpen={handleOpen}
			/>
		</>
	);
};

export default FormRegisterUser;
