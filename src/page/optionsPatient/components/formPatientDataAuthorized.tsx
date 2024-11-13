import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { SelectComponent } from '../../../components/input/SelectComponent';
import Switch from '../../../components/switch/Switch';
import {
	FamilyRelationship,
	NationalityEnum,
	SexEnum,
	SexText,
} from '../../../enum/data';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterAuthorizedDTOSchemaType } from './formRegisterPatient/dataAuthorizedPatient/dto/registerAuthorizedPatient.dto';

const FormPatientDataAuthorized = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	setActive,
	active,
	handleSubmitRegister,
	update,
}: FormPatientProps<RegisterAuthorizedDTOSchemaType>) => {
	return (
		<section className={`formRegisterPatient`}>
			<h2 className='formRegisterPatient__title formRegisterPatient__title--authorized'>
				<samp className='formRegisterPatient__titleText'>
					{loading
						? 'Cargando...'
						: 'Datos de un autorizado (retiro del tratamiento)'}
				</samp>
				<Switch active={active} setActive={setActive} />
			</h2>

			{active && (
				<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
					<SelectComponent
						title={system.authorized_v_e}
						name='v_e'
						placeholder={system.authorized_v_e}
						data={transformEnum({ transformEnum: NationalityEnum })}
						error={errors.v_e || formateError({ error, name: 'v_e' })}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
					<Input
						name={'ci'}
						placeholder={system.authorized_ci}
						register={register}
						error={errors.ci || formateError({ error, name: 'ci' })}
						type='number'
						className='formRegisterPatient__input'
						label='*'
					/>
					<Input
						name={'first_name'}
						placeholder={system.authorized_first_name}
						register={register}
						error={
							errors.first_name || formateError({ error, name: 'first_name' })
						}
						className='formRegisterPatient__input'
						label='*'
					/>
					<Input
						name={'middle_name'}
						placeholder={system.authorized_middle_name}
						register={register}
						error={
							errors.middle_name || formateError({ error, name: 'middle_name' })
						}
						className='formRegisterPatient__input'
						label='*'
					/>
					<Input
						name={'first_surname'}
						placeholder={system.authorized_first_surname}
						register={register}
						error={
							errors.first_surname ||
							formateError({ error, name: 'first_surname' })
						}
						className='formRegisterPatient__input'
						label='*'
					/>
					<Input
						name={'last_surname'}
						placeholder={system.authorized_last_surname}
						register={register}
						error={
							errors.last_surname ||
							formateError({ error, name: 'last_surname' })
						}
						className='formRegisterPatient__input'
						label='*'
					/>
					<SelectComponent
						title={system.authorized_sex}
						placeholder={system.authorized_sex}
						data={transformEnum({ transformEnum: SexEnum, text: SexText })}
						name={'sex'}
						error={errors.sex || formateError({ error, name: 'sex' })}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
					<SelectComponent
						title={system.authorized_family_relationship}
						placeholder={system.authorized_family_relationship}
						data={transformEnum({ transformEnum: FamilyRelationship })}
						name={'family_relationship'}
						error={
							errors.family_relationship ||
							formateError({ error, name: 'family_relationship' })
						}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
					<Btn
						title='botón para enviar datos de registro'
						CN={{ className: 'btn--form formRegisterPatient__btn' }}
						text={system.btn}
						type='submit'
					/>
				</form>
			)}
			{!active && (
				<Btn
					title='botón para enviar datos de registro'
					CN={{
						className:
							'btn--form formRegisterPatient__btn formRegisterPatient__btn--authorized',
					}}
					text={update ? system.btnPatientsUpdate : system.btn}
					handleClick={handleSubmitRegister}
				/>
			)}
		</section>
	);
};

export default FormPatientDataAuthorized;
