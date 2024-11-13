import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Btn } from '../../components/button/Btn';
import { Input } from '../../components/input/Input';
import { ContextMsg } from '../../context/msg/MsgContext';
import { system } from '../../systemText';
import { ErrorType } from '../../typeGlobal';
import {
	RecoveryPassEmailDTOSchema,
	RecoveryPassEmailDTOSchemaType,
} from './dto/email.dto';

interface EmailFormProps {
	setVewForm: React.Dispatch<
		React.SetStateAction<{
			email: boolean;
			code: boolean;
			password: boolean;
		}>
	>;
	setEmail: (value: React.SetStateAction<string | null>) => void;
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
}

const EmailForm = ({ setVewForm, handlePost, setEmail }: EmailFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryPassEmailDTOSchemaType>({
		resolver: zodResolver(RecoveryPassEmailDTOSchema),
	});
	const { setMsg } = useContext(ContextMsg);

	const handleDataEmail = useCallback(
		async (data: RecoveryPassEmailDTOSchemaType) => {
			try {
				const res = await handlePost({
					data,
					url: '/user/recoveryPassword',
				});
				if (res) {
					setMsg(res.msg);
					setVewForm({ email: false, code: true, password: false });
					setEmail(data.email);
				}
			} catch (err: any) {
				const errorResponse = err?.response?.data as ErrorType;
				const errorMessage =
					errorResponse.errors?.find(
						err => err.property === 'uidPatients' || err.property === 'all',
					)?.message || null;

				setMsg(errorMessage);
			}
		},
		[],
	);

	return (
		<form
			className='recoveryForm__form'
			onSubmit={handleSubmit(handleDataEmail)}
		>
			<Input
				name={'email'}
				placeholder={system.email}
				register={register}
				error={errors.email}
				className='recoveryForm__input'
				type='email'
			/>
			<Btn title='Recuperar la contraseña' text='Enviar' type='submit' />
		</form>
	);
};

export default EmailForm;
