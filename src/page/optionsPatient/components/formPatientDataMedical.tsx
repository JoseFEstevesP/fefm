import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { SelectComponent } from '../../../components/input/SelectComponent';
import { Disability, HealthCareSafetyPlan } from '../../../enum/data';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterMedicalDTOSchemaType } from './formRegisterPatient/dataMedicalPatient/dto/registerMedicalPatient.dto';
import usePM from './hooks/usePM';

const FormPatientDataMedical = ({
	handleSubmit,
	errors,
	error,
	register,
	loading,
	control,
	update,
}: FormPatientProps<RegisterMedicalDTOSchemaType>) => {
	const { loadingPathologies, medications, pathologies } = usePM(control);

	return (
		<section className='formRegisterPatient'>
			<h2 className='formRegisterPatient__title'>
				{loading ? 'Cargando...' : 'Datos médicos'}
			</h2>
			<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
				<SelectComponent
					title={system.medical_disability}
					name='medical_disability'
					placeholder={system.medical_disability}
					data={transformEnum({ transformEnum: Disability })}
					error={
						errors.medical_disability ||
						formateError({ error, name: 'disability' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.medical_health_care_safety_plan}
					name='health_care_safety_plan'
					placeholder={system.medical_health_care_safety_plan}
					data={transformEnum({ transformEnum: HealthCareSafetyPlan })}
					error={
						errors.health_care_safety_plan ||
						formateError({ error, name: 'health_care_safety_plan' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name='name_of_health_care_facility'
					placeholder={system.medical_name_of_health_care_facility}
					register={register}
					error={
						errors.name_of_health_care_facility ||
						formateError({ error, name: 'name_of_health_care_facility' })
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name='medical_specialty'
					placeholder={system.medical_medical_specialty}
					register={register}
					error={
						errors.medical_specialty ||
						formateError({ error, name: 'medical_specialty' })
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name='treating_physician_name'
					placeholder={system.medical_treating_physician_name}
					register={register}
					error={
						errors.treating_physician_name ||
						formateError({ error, name: 'treating_physician_name' })
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				{loadingPathologies ? (
					<p>Cargando patologías...</p>
				) : (
					<SelectComponent
						title={system.medical_pathology}
						name='uidPathology'
						placeholder={system.medical_pathology}
						data={pathologies}
						error={
							errors.uidPathology ||
							formateError({ error, name: 'uidPathology' })
						}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
				)}
				<SelectComponent
					title={system.medical_medication}
					name='uidMedicament'
					placeholder={system.medical_medication}
					data={
						medications.length
							? medications
							: [{ label: 'No hay medicamentos disponibles', value: '' }]
					}
					error={
						errors.uidMedicament ||
						formateError({ error, name: 'uidMedicament' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name='daily_dosage'
					placeholder={system.medical_daily_dosage}
					register={register}
					error={
						errors.daily_dosage || formateError({ error, name: 'daily_dosage' })
					}
					className='formRegisterPatient__input'
					label='*'
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

export default FormPatientDataMedical;
