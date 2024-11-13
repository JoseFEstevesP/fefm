import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { SelectComponent } from '../../../components/input/SelectComponent';
import {
	HousingOwnership,
	HousingType,
	PhysicalConditionOfTheHouse,
	YN,
} from '../../../enum/data';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import { municipality, parish, state } from '../../../helper/venezuela';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterHousingDTOSchemaType } from './formRegisterPatient/dataHousingPatient/dto/registerHousingPatient.dto';

const FormPatientDataHousing = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	value,
	update,
}: FormPatientProps<RegisterHousingDTOSchemaType>) => {
	return (
		<section className={`formRegisterPatient`}>
			<h2 className='formRegisterPatient__title'>
				{loading ? 'Cargando...' : 'Datos de vivienda'}
			</h2>
			<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
				<SelectComponent
					title='jefe de familia'
					name='you_are_head_of_household'
					placeholder={system.housing_you_are_head_of_household}
					data={transformEnum({ transformEnum: YN })}
					error={
						errors.you_are_head_of_household ||
						formateError({ error, name: 'you_are_head_of_household' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title='Estado'
					name='state'
					placeholder={system.housing_state}
					data={state()}
					error={errors.state || formateError({ error, name: 'state' })}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				{value.state && (
					<SelectComponent
						title='Municipio'
						name='municipality'
						placeholder={system.housing_municipality}
						data={
							municipality({ state: value.state }) || [{ label: '', value: '' }]
						}
						error={
							errors.municipality ||
							formateError({ error, name: 'municipality' })
						}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
				)}
				{value.municipality && (
					<SelectComponent
						title='Parroquias'
						name='parish'
						placeholder={system.housing_parish}
						data={
							parish({
								state: value.state,
								municipality: value.municipality,
							}) || [{ label: '', value: '' }]
						}
						error={errors.parish || formateError({ error, name: 'parish' })}
						control={control}
						className='formRegisterPatient__input'
						label='*'
					/>
				)}
				<Input
					name={'city'}
					placeholder={system.housing_city}
					register={register}
					error={errors.city || formateError({ error, name: 'city' })}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'address'}
					placeholder={system.housing_address}
					register={register}
					error={errors.address || formateError({ error, name: 'address' })}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housing_physical_condition_of_the_house}
					name='physical_condition_of_the_house'
					placeholder={system.housing_physical_condition_of_the_house}
					data={transformEnum({ transformEnum: PhysicalConditionOfTheHouse })}
					error={
						errors.physical_condition_of_the_house ||
						formateError({
							error,
							name: 'physical_condition_of_the_house',
						})
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housing_type_of_dwelling}
					name='type_of_dwelling'
					placeholder={system.housing_type_of_dwelling}
					data={transformEnum({ transformEnum: HousingType })}
					error={
						errors.type_of_dwelling ||
						formateError({
							error,
							name: 'type_of_dwelling',
						})
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housing_dwelling_is}
					name='dwelling_is'
					placeholder={system.housing_dwelling_is}
					data={transformEnum({ transformEnum: HousingOwnership })}
					error={
						errors.dwelling_is ||
						formateError({
							error,
							name: 'dwelling_is',
						})
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'how_many_spaces_in_the_home'}
					placeholder={system.housing_how_many_spaces_in_the_home}
					register={register}
					error={
						errors.how_many_spaces_in_the_home ||
						formateError({ error, name: 'how_many_spaces_in_the_home' })
					}
					type='number'
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'main_phone_number'}
					placeholder={system.housing_main_phone_number}
					register={register}
					error={
						errors.main_phone_number ||
						formateError({ error, name: 'main_phone_number' })
					}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'otherPhoneNumber'}
					placeholder={system.housing_otherPhoneNumber}
					register={register}
					error={
						errors.otherPhoneNumber ||
						formateError({ error, name: 'otherPhoneNumber' }) ||
						formateError({
							error:
								value.main_phone_number !== undefined &&
								value.main_phone_number === value.otherPhoneNumber
									? {
											errors: [
												{
													property: 'otherPhoneNumber',
													message: 'Ambos numeros son iguales',
												},
											],
										}
									: null,
							name: 'otherPhoneNumber',
						})
					}
					className='formRegisterPatient__input'
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

export default FormPatientDataHousing;
