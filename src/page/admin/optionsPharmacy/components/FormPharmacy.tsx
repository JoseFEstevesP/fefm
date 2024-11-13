import { Btn } from '../../../../components/button/Btn';
import { Input } from '../../../../components/input/Input';
import { SelectComponent } from '../../../../components/input/SelectComponent';
import { formateError } from '../../../../functions/formaterError';
import { municipality, state } from '../../../../helper/venezuela';
import { system } from '../../../../systemText';
import { UserAdminPharmacyDTOSchemaType } from '../dto/UserAdminPharmacy.dto';
import { PharmacyProps } from '../PharmacyTypeData';
import './../../style/formRegisterUser.scss';

const FormPharmacy = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	value,
}: PharmacyProps<UserAdminPharmacyDTOSchemaType>) => {
	return (
		<section className={`formRegisterUser`}>
			<form onSubmit={handleSubmit} className='formRegisterUser__form'>
				<Input
					name={'name'}
					placeholder={system.pharmacyName}
					register={register}
					error={errors.name || formateError({ error, name: 'name' })}
					className='formRegisterUser__input'
				/>
				<Input
					name={'address'}
					placeholder={system.pharmacyAddress}
					register={register}
					error={errors.address || formateError({ error, name: 'address' })}
					className='formRegisterUser__input'
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
				<SelectComponent
					title='Municipio'
					name='municipality'
					placeholder={system.housing_municipality}
					data={
						municipality({ state: value.state }) || [{ label: '', value: '' }]
					}
					error={
						errors.municipality || formateError({ error, name: 'municipality' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
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

export default FormPharmacy;
