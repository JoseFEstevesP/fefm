import { Btn } from '../../../components/button/Btn';
import { SelectComponent } from '../../../components/input/SelectComponent';
import SelectMultiple from '../../../components/select/SelectMultiple';
import {
	Appliance,
	BathroomType,
	CookingFuel,
	FloorMaterial,
	NumberOfRooms,
	RoofMaterial,
	WaterSupply,
	YN,
} from '../../../enum/data';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import { system } from '../../../systemText';
import { FormPatientProps } from '../optionsPatientProps';
import { RegisterHousingExDTOSchemaType } from './formRegisterPatient/dataHousingExPatient/dto/registerHousingExPatient.dto';

const FormPatientDataHousingEx = ({
	handleSubmit,
	errors,
	error,
	control,
	loading,
	update,
}: FormPatientProps<RegisterHousingExDTOSchemaType>) => {
	return (
		<section className={`formRegisterPatient`}>
			<h2 className='formRegisterPatient__title'>
				{loading ? 'Cargando...' : 'Datos extra de vivienda'}
			</h2>
			<form onSubmit={handleSubmit} className='formRegisterPatient__form'>
				<SelectComponent
					title={system.housingEx_main_mat_house}
					name='main_mat_house'
					placeholder={system.housingEx_main_mat_house}
					data={transformEnum({ transformEnum: RoofMaterial })}
					error={
						errors.main_mat_house ||
						formateError({ error, name: 'main_mat_house' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housingEx_floor_mat}
					name='floor_mat'
					placeholder={system.housingEx_floor_mat}
					data={transformEnum({ transformEnum: FloorMaterial })}
					error={errors.floor_mat || formateError({ error, name: 'floor_mat' })}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housingEx_num_rooms}
					name='num_rooms'
					placeholder={system.housingEx_num_rooms}
					data={transformEnum({ transformEnum: NumberOfRooms })}
					error={errors.num_rooms || formateError({ error, name: 'num_rooms' })}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housingEx_elec_light}
					name='elec_light'
					placeholder={system.housingEx_elec_light}
					data={transformEnum({ transformEnum: YN })}
					error={
						errors.elec_light || formateError({ error, name: 'elec_light' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housingEx_water_source}
					name='water_source'
					placeholder={system.housingEx_water_source}
					data={transformEnum({ transformEnum: WaterSupply })}
					error={
						errors.water_source || formateError({ error, name: 'water_source' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housingEx_bathroom_type}
					name='bathroom_type'
					placeholder={system.housingEx_bathroom_type}
					data={transformEnum({ transformEnum: BathroomType })}
					error={
						errors.bathroom_type ||
						formateError({ error, name: 'bathroom_type' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectMultiple
					name='appliances'
					placeholder={system.housingEx_appliances}
					options={transformEnum({ transformEnum: Appliance })}
					error={
						errors.appliances || formateError({ error, name: 'appliances' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<SelectComponent
					title={system.housingEx_cooking_fuel}
					name='cooking_fuel'
					placeholder={system.housingEx_cooking_fuel}
					data={transformEnum({ transformEnum: CookingFuel })}
					error={
						errors.cooking_fuel || formateError({ error, name: 'cooking_fuel' })
					}
					control={control}
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

export default FormPatientDataHousingEx;
