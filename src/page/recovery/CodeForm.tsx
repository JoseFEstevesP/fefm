import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Btn } from '../../components/button/Btn';
import { Input } from '../../components/input/Input';
import { ContextMsg } from '../../context/msg/MsgContext';
import { system } from '../../systemText';
import { ErrorType } from '../../typeGlobal';
import {
	RecoveryPassCodeDTOSchema,
	RecoveryPassCodeDTOSchemaType,
} from './dto/code.dto';

interface CodeFormProps {
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
	email: string;
	setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const CodeForm = ({
	handlePost,
	email,
	setToken,
	setVewForm,
}: CodeFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryPassCodeDTOSchemaType>({
		resolver: zodResolver(RecoveryPassCodeDTOSchema),
	});
	const { setMsg } = useContext(ContextMsg);

	const handleDataCode = useCallback(
		async (data: RecoveryPassCodeDTOSchemaType) => {
			const newData = email ? { ...data, email } : data;
			try {
				const res = await handlePost({
					data: newData,
					url: '/user/recoveryPassCode',
				});
				if (res) {
					setVewForm({ email: false, code: false, password: true });
					setToken(res.token);
				}
			} catch (err: any) {
				const errorResponse = err?.response?.data as ErrorType;
				const errorMessage =
					errorResponse.errors?.find(err => err.property === 'all')?.message ||
					null;

				setMsg(errorMessage);
			}
		},
		[],
	);

	return (
		<form
			className='recoveryForm__form'
			onSubmit={handleSubmit(handleDataCode)}
		>
			<Input
				name={'code'}
				placeholder={system.code.recovery}
				register={register}
				error={errors.code}
				className='recoveryForm__input'
			/>
			<Btn title='Recuperar la contraseña' text='Enviar' type='submit' />
		</form>
	);
};

export default CodeForm;
