import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { SelectComponent } from '../../../components/input/SelectComponent';
import { YN } from '../../../enum/data';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterEconomicDTOSchemaType } from './formRegisterPatient/dataEconomicPatient/dto/registerEconomicPatient.dto';

const FormPatientDataEconomic = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	update,
}: FormPatientProps<RegisterEconomicDTOSchemaType>) => {
	return (
		<section className={`formRegisterPatient`}>
			<h2 className='formRegisterPatient__title'>
				{loading ? 'Cargando...' : 'Datos economicos'}
			</h2>
			<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
				<Input
					name={'monthly_income'}
					placeholder={system.economic_monthly_income}
					register={register}
					error={
						errors.monthly_income ||
						formateError({ error, name: 'monthly_income' })
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.economic_receives_help_from_a_relative_or_friend}
					name='receives_help_from_a_relative_or_friend'
					placeholder={system.economic_receives_help_from_a_relative_or_friend}
					data={transformEnum({ transformEnum: YN })}
					error={
						errors.receives_help_from_a_relative_or_friend ||
						formateError({
							error,
							name: 'receives_help_from_a_relative_or_friend',
						})
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.economic_ingreso_carnet_subsidio}
					name='ingreso_carnet_subsidio'
					placeholder={system.economic_ingreso_carnet_subsidio}
					data={transformEnum({ transformEnum: YN })}
					error={
						errors.ingreso_carnet_subsidio ||
						formateError({
							error,
							name: 'ingreso_carnet_subsidio',
						})
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'average_monthly_fixed_expenses'}
					placeholder={system.economic_average_monthly_fixed_expenses}
					register={register}
					error={
						errors.average_monthly_fixed_expenses ||
						formateError({
							error,
							name: 'average_monthly_fixed_expenses',
						})
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'average_monthly_variable_expenses'}
					placeholder={system.economic_average_monthly_variable_expenses}
					register={register}
					error={
						errors.average_monthly_variable_expenses ||
						formateError({
							error,
							name: 'average_monthly_variable_expenses',
						})
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

export default FormPatientDataEconomic;
