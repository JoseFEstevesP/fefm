import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { SelectComponent } from '../../../components/input/SelectComponent';
import {
	GradeOfStudy,
	MaritalStatus,
	NationalityEnum,
	Occupation,
	PatientEnum,
	SexEnum,
	SexText,
	YN,
} from '../../../enum/data';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterDataUserDTOSchemaType } from './formRegisterPatient/dataUserPatient/dto/registerDataUserPatient.dto';

const FormPatientDataUser = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	disabled,
	value,
	update,
}: FormPatientProps<RegisterDataUserDTOSchemaType>) => {
	return (
		<section className={`formRegisterPatient`}>
			<h2 className='formRegisterPatient__title'>
				{loading ? 'Cargando...' : 'Datos personales'}
			</h2>
			<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
				{!update && (
					<SelectComponent
						title={system.patient}
						name='patient'
						placeholder={system.patient}
						data={transformEnum({ transformEnum: PatientEnum })}
						error={errors.patient || formateError({ error, name: 'patient' })}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
				)}
				<SelectComponent
					title='nacionalidad'
					name='v_e'
					placeholder={system.v_e}
					data={transformEnum({ transformEnum: NationalityEnum })}
					error={errors.v_e || formateError({ error, name: 'v_e' })}
					control={control}
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'ci'}
					placeholder={system.ci}
					register={register}
					error={errors.ci || formateError({ error, name: 'ci' })}
					type='number'
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'first_name'}
					placeholder={system.first_name}
					register={register}
					error={
						errors.first_name || formateError({ error, name: 'first_name' })
					}
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'middle_name'}
					placeholder={system.middle_name}
					register={register}
					error={
						errors.middle_name || formateError({ error, name: 'middle_name' })
					}
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'first_surname'}
					placeholder={system.first_surname}
					register={register}
					error={
						errors.first_surname ||
						formateError({ error, name: 'first_surname' })
					}
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'last_surname'}
					placeholder={system.last_surname}
					register={register}
					error={
						errors.last_surname || formateError({ error, name: 'last_surname' })
					}
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<SelectComponent
					title='sex'
					placeholder={system.sex}
					data={transformEnum({ transformEnum: SexEnum, text: SexText })}
					name={'sex'}
					error={errors.sex || formateError({ error, name: 'sex' })}
					control={control}
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'place_of_birth'}
					placeholder={system.place_of_birth}
					register={register}
					error={
						errors.place_of_birth ||
						formateError({ error, name: 'place_of_birth' })
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'date_of_birth'}
					placeholder={system.date_of_birth}
					register={register}
					error={
						errors.date_of_birth ||
						formateError({ error, name: 'date_of_birth' })
					}
					className='formRegisterPatient__input'
					type='date'
					label='*'
				/>
				<SelectComponent
					title='grado de estudio'
					placeholder={system.grade_of_study}
					data={transformEnum({ transformEnum: GradeOfStudy })}
					name={'grade_of_study'}
					error={
						errors.grade_of_study ||
						formateError({ error, name: 'grade_of_study' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title='estado civil'
					placeholder={system.marital_status}
					data={transformEnum({ transformEnum: MaritalStatus })}
					name={'marital_status'}
					error={
						errors.marital_status ||
						formateError({ error, name: 'marital_status' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title='hijos'
					placeholder={system.children}
					data={transformEnum({ transformEnum: YN })}
					name={'children'}
					error={errors.children || formateError({ error, name: 'children' })}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				{value.children === YN.yes ? (
					<Input
						name={'number_of_children'}
						placeholder={system.number_of_children}
						register={register}
						error={
							errors.number_of_children ||
							formateError({ error, name: 'number_of_children' })
						}
						type='number'
						className='formRegisterPatient__input'
						label='*'
					/>
				) : undefined}

				<SelectComponent
					title='ocupación'
					placeholder={system.occupation}
					data={transformEnum({ transformEnum: Occupation })}
					name={'occupation'}
					error={
						errors.occupation || formateError({ error, name: 'occupation' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'email'}
					placeholder={system.email}
					register={register}
					error={errors.email || formateError({ error, name: 'email' })}
					type='email'
					className='formRegisterPatient__input'
					label='*'
					disabled={disabled}
				/>
				<Input
					name={'phone'}
					placeholder={system.phone}
					register={register}
					error={errors.phone || formateError({ error, name: 'phone' })}
					className='formRegisterPatient__input'
					type='number'
					label='*'
					disabled={disabled}
				/>
				<Btn
					title='botón para enviar datos de registro'
					CN={{ className: 'btn--form formRegisterPatient__btn' }}
					text={update ? system.btnPatientsUpdate : system.btnPatients}
					type='submit'
				/>
			</form>
		</section>
	);
};

export default FormPatientDataUser;
