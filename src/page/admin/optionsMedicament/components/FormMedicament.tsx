import { Btn } from '../../../../components/button/Btn';
import { Input } from '../../../../components/input/Input';
import { formateError } from '../../../../functions/formaterError';
import { system } from '../../../../systemText';
import { UserAdminMedicamentDTOSchemaType } from '../dto/UserAdminMedicament.dto';
import { MedicamentProps } from '../medicamentTypeData';
import './../../style/formRegisterUser.scss';

const FormPharmacy = ({
	handleSubmit,
	errors,
	error,
	register,
	loading,
}: MedicamentProps<UserAdminMedicamentDTOSchemaType>) => {
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
					name={'description'}
					placeholder={system.description}
					register={register}
					error={
						errors.description || formateError({ error, name: 'description' })
					}
					className='formRegisterUser__input'
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
