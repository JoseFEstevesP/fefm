import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { ContextToken } from '../../context/token/TokenContext';
import { system } from '../../systemText';
import { Btn } from '../button/Btn';
import { Icons } from '../icon/Icons';
import { Input } from '../input/Input';
import { LoginDTOSchema, LoginDTOSchemaType } from './dto/login.dto';
import useLogin from './hooks/useLogin';
import './login.scss';
import { LoginProperty } from './loginProps';

export const Login = ({ to = '', className = '' }: LoginProperty) => {
	const { handleSubmitLogin, loading } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDTOSchemaType>({ resolver: zodResolver(LoginDTOSchema) });

	const { token } = useContext(ContextToken);
	if (token) return <Navigate to={to} />;
	return (
		<>
			<section className={`login box ${className}`}>
				<div className='login__logo'>
					<Icons iconName='user' className='login__userIcon' />
				</div>
				<form
					onSubmit={handleSubmit(handleSubmitLogin)}
					className='login__form'
				>
					<Input
						name={'ci'}
						placeholder={system.ci}
						register={register}
						error={errors.ci}
						className='login__input'
					/>
					<Input
						name={'password'}
						placeholder={system.password}
						type='password'
						error={errors.password}
						register={register}
						className='login__input'
					/>
					<div className='login__links'>
						<Link to={'/registerUser'} className='login__recovery'>
							<span>{system.register}</span>
						</Link>
						<Link to={'/recovery'} className='login__recovery'>
							<span>{system.recoveryPassword}</span>
						</Link>
					</div>
					<Btn
						title='botón para enviar iniciar sesión'
						CN={{ className: 'btn--form login__btn' }}
						text={system.btn}
						type='submit'
						disabled={loading}
					/>
				</form>
			</section>
		</>
	);
};
