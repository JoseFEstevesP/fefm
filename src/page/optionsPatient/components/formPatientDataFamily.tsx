import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { formateError } from '../../../functions/formaterError';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterFamilyDTOSchemaType } from './formRegisterPatient/dataFamilyPatient/dto/registerFamilyPatient.dto';

const FormPatientDataFamily = ({
	handleSubmit,
	errors,
	error,
	register,
	loading,
	update,
}: FormPatientProps<RegisterFamilyDTOSchemaType>) => {
	return (
		<section className={`formRegisterPatient`}>
			<h2 className='formRegisterPatient__title'>
				{loading ? 'Cargando...' : 'Datos de familiares'}
			</h2>
			<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
				<Input
					name={'reside_in_housing'}
					placeholder={system.family_reside_in_housing}
					register={register}
					error={
						errors.reside_in_housing ||
						formateError({ error, name: 'reside_in_housing' })
					}
					className='formRegisterPatient__input'
					label='*'
					type='number'
				/>
				<Input
					name={'inhabit_5_18'}
					placeholder={system.family_inhabit_5_18}
					register={register}
					error={
						errors.inhabit_5_18 || formateError({ error, name: 'inhabit_5_18' })
					}
					className='formRegisterPatient__input'
					label='*'
					type='number'
				/>
				<Input
					name={'contribute_expenses'}
					placeholder={system.family_contribute_expenses}
					register={register}
					error={
						errors.contribute_expenses ||
						formateError({ error, name: 'contribute_expenses' })
					}
					className='formRegisterPatient__input'
					label='*'
					type='number'
				/>
				<Input
					name={'work_housing'}
					placeholder={system.family_work_housing}
					register={register}
					error={
						errors.work_housing || formateError({ error, name: 'work_housing' })
					}
					className='formRegisterPatient__input'
					label='*'
					type='number'
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

export default FormPatientDataFamily;
