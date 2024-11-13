import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import { Input } from '../../../../components/input/Input';
import SelectMultiple from '../../../../components/select/SelectMultiple';
import { formateError } from '../../../../functions/formaterError';
import useGet from '../../../../hooks/useGet';
import { system } from '../../../../systemText';
import { UserAdminPathologyDTOSchemaType } from '../dto/UserAdminPathology.dto';
import { MedicamentsLabel, PathologyProps } from '../PathologyTypeData';
import './../../style/formRegisterUser.scss';

const FormPathology = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	setMedical,
}: PathologyProps<UserAdminPathologyDTOSchemaType>) => {
	const { getData } = useGet();
	const [medicament, setMedicament] = useState<MedicamentsLabel[] | null>(null);
	const handleGetMedicaments = useCallback(async () => {
		try {
			const data = await getData({ url: '/medicament/all' });
			setMedicament(data);
		} catch (err) {
			console.error(err);
		}
	}, []);

	useEffect(() => {
		handleGetMedicaments();
	}, []);
	useEffect(() => {
		if (medicament && setMedical) {
			setMedical(medicament);
		}
	}, [medicament]);

	return (
		<section className={`formRegisterUser`}>
			<form onSubmit={handleSubmit} className='formRegisterUser__form'>
				<Input
					name={'name'}
					placeholder={system.pathologyName}
					register={register}
					error={errors.name || formateError({ error, name: 'name' })}
					className='formRegisterUser__input'
				/>
				<Input
					name={'description'}
					placeholder={system.pathologyDescription}
					register={register}
					error={
						errors.description || formateError({ error, name: 'description' })
					}
					className='formRegisterUser__input'
					label='*'
				/>
				<SelectMultiple
					name='medicaments'
					control={control}
					placeholder={system.medicaments}
					options={medicament || [{ value: '', label: '' }]}
					error={
						errors.medicaments || formateError({ error, name: 'medicaments' })
					}
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

export default FormPathology;
