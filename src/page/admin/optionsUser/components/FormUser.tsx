import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Btn } from '../../../../components/button/Btn';
import { Input } from '../../../../components/input/Input';
import { SelectComponent } from '../../../../components/input/SelectComponent';
import { ContextToken } from '../../../../context/token/TokenContext';
import { NationalityEnum, SexEnum, SexText } from '../../../../enum/data';
import { formateError } from '../../../../functions/formaterError';
import { transformEnum } from '../../../../helper/transformEnum';
import useValidate from '../../../../hooks/useValidate';
import { system } from '../../../../systemText';
import { Permission } from '../../optionsRol/enum/dataRol';
import { FormUserAdminProps } from '../../userAdminData';
import { UserAdminDTOSchemaType } from '../dto/UserAdminUser.dto';
import './../../style/formRegisterUser.scss';

const FormUser = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	rolData,
	loading,
	handleOpen,
}: FormUserAdminProps<UserAdminDTOSchemaType>) => {
	const { token } = useContext(ContextToken);
	const { handleData } = useValidate();

	return (
		<section className={`formRegisterUser`}>
			<form onSubmit={handleSubmit} className='formRegisterUser__form'>
				<SelectComponent
					title={system.v_e}
					name='v_e'
					placeholder={system.v_e}
					data={transformEnum({ transformEnum: NationalityEnum })}
					error={errors.v_e || formateError({ error, name: 'v_e' })}
					control={control}
					className='formRegisterUser__input'
				/>
				<Input
					name={'ci'}
					placeholder={system.ci}
					register={register}
					error={errors.ci || formateError({ error, name: 'ci' })}
					className='formRegisterUser__input'
				/>
				<Input
					name={'first_name'}
					placeholder={system.first_name}
					register={register}
					error={
						errors.first_name || formateError({ error, name: 'first_name' })
					}
					className='formRegisterUser__input'
				/>
				<Input
					name={'middle_name'}
					placeholder={system.middle_name}
					register={register}
					error={
						errors.middle_name || formateError({ error, name: 'middle_name' })
					}
					className='formRegisterUser__input'
				/>
				<Input
					name={'first_surname'}
					placeholder={system.first_surname}
					register={register}
					error={
						errors.first_surname ||
						formateError({ error, name: 'first_surname' })
					}
					className='formRegisterUser__input'
				/>
				<Input
					name={'last_surname'}
					placeholder={system.last_surname}
					register={register}
					error={
						errors.last_surname || formateError({ error, name: 'last_surname' })
					}
					className='formRegisterUser__input'
				/>
				<SelectComponent
					title={system.sex}
					placeholder={system.authorized_sex}
					name={'sex'}
					data={transformEnum({ transformEnum: SexEnum, text: SexText })}
					error={errors.sex || formateError({ error, name: 'sex' })}
					control={control}
					className='formRegisterUser__input'
				/>
				<Input
					name={'email'}
					placeholder={system.email}
					type='email'
					register={register}
					error={errors.email || formateError({ error, name: 'email' })}
					className='formRegisterUser__input'
				/>
				<Input
					name={'phone'}
					placeholder={system.phone}
					register={register}
					error={errors.phone || formateError({ error, name: 'phone' })}
					className='formRegisterUser__input'
				/>
				<Input
					name={'password'}
					placeholder={system.password}
					type='password'
					register={register}
					error={errors.password || formateError({ error, name: 'password' })}
					className='formRegisterUser__input'
				/>
				{token && handleData({ per: Permission.rol }) && rolData && (
					<SelectComponent
						title={system.rol}
						placeholder={system.rol}
						data={rolData}
						name={'uidRol'}
						error={errors.uidRol || formateError({ error, name: 'uidRol' })}
						control={control}
						className='formRegisterUser__input'
					/>
				)}
				{!token && (
					<div className='formRegisterUser__links'>
						<Link to='/'>
							<span>{system.login}</span>
						</Link>
						<Btn
							title='Activar cuenta'
							text='Activar cuenta'
							handleClick={handleOpen}
						/>
					</div>
				)}
				<Btn
					title='botón para enviar datos de registro'
					CN={{ className: 'btn--form formRegisterUser__btn' }}
					text={system.btn}
					type='submit'
					disabled={loading}
				/>
			</form>
		</section>
	);
};

export default FormUser;
