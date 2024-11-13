import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Btn } from '../../components/button/Btn';
import { Input } from '../../components/input/Input';
import { ContextMsg } from '../../context/msg/MsgContext';
import { ErrorType } from '../../typeGlobal';
import {
	RecoveryPassPasswordDTOSchema,
	RecoveryPassPasswordDTOSchemaType,
} from './dto/newPassword.dto';

interface PasswordFormProps {
	setVewForm: React.Dispatch<
		React.SetStateAction<{
			email: boolean;
			code: boolean;
			password: boolean;
		}>
	>;
	handlePost: ({
		data,
		token,
		url,
	}: {
		data: {
			[key: string]: string;
		};
		token?: string;
		url: string;
	}) => Promise<any>;
	token: string;
}

const PasswordForm = ({ handlePost, setVewForm, token }: PasswordFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryPassPasswordDTOSchemaType>({
		resolver: zodResolver(RecoveryPassPasswordDTOSchema),
	});
	const navigate = useNavigate();
	const { setMsg } = useContext(ContextMsg);

	const handleDataNewPassword = useCallback(
		async (data: RecoveryPassPasswordDTOSchemaType) => {
			try {
				const res = await handlePost({
					data,
					url: '/user/newPassword',
					token,
				});
				if (res) {
					setMsg(res.msg);
					setVewForm({ email: true, code: false, password: false });
					navigate('/');
				}
			} catch (err: any) {
				const errorResponse = err?.response?.data as ErrorType;
				const errorMessage =
					errorResponse.errors?.find(err => err.property === 'all')?.message ||
					null;
				setMsg(errorMessage);
			}
		},
		[handlePost, setMsg, setVewForm, token],
	);

	return (
		<form
			className='recoveryForm__form'
			onSubmit={handleSubmit(handleDataNewPassword)}
		>
			<Input
				name={'newPassword'}
				placeholder={'Nueva Contraseña'}
				register={register}
				error={errors.newPassword}
				className='recoveryForm__input'
				type='password'
			/>
			<Input
				name={'confirmPassword'}
				placeholder={'Repetir Contraseña'}
				register={register}
				error={errors.confirmPassword}
				className='recoveryForm__input'
				type='password'
			/>
			<Btn title='Establecer Contraseña' text='Enviar' type='submit' />
		</form>
	);
};

export default PasswordForm;
