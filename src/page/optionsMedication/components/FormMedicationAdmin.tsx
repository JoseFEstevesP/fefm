import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import { ObjectData } from '../../../components/input/inputProps';
import { SelectComponent } from '../../../components/input/SelectComponent';
import { formateError } from '../../../functions/formaterError';
import { transformEnum } from '../../../helper/transformEnum';
import useGet from '../../../hooks/useGet';
import { system } from '../../../systemText';
import { UpdateMedicationAdminDTOSchemaType } from '../dto/formUpdateMedicationAdmin.dto';
import { DeliveryStatus } from '../enum/data';
import { FormMedicationProps } from '../optionsMedicationProps';

const FormMedicationAdmin = ({
	handleSubmit,
	errors,
	error,
	register,
	loading,
	isUpdate = false,
	control,
}: FormMedicationProps<UpdateMedicationAdminDTOSchemaType>) => {
	const { getData } = useGet();
	const [pharmacy, setPharmacy] = useState<ObjectData[] | null>(null);

	const handleData = useCallback(async () => {
		const res = await getData({ url: '/pharmacy/all' });
		setPharmacy(res);
	}, []);

	useEffect(() => {
		handleData();
	}, []);

	return (
		<section className={`formMedication`}>
			<h2 className='formMedication__title'>
				{loading ? 'Cargando' : 'Solicitud de medicamentos'}
			</h2>
			<form className='formMedication__form' onSubmit={handleSubmit}>
				<Input
					name={'quantity'}
					placeholder={system.quantity}
					register={register}
					error={errors.quantity || formateError({ error, name: 'quantity' })}
					className='formMedication__input'
					label='*'
				/>
				<SelectComponent
					title={system.delivery_status}
					name='delivery_status'
					placeholder={system.delivery_status}
					data={transformEnum({ transformEnum: DeliveryStatus })}
					error={
						errors.delivery_status ||
						formateError({ error, name: 'delivery_status' })
					}
					control={control}
					className='formRegisterPatient__input'
					label='*'
				/>
				<Input
					name={'msg'}
					placeholder={system.msg}
					register={register}
					error={errors.msg || formateError({ error, name: 'msg' })}
					className='formMedication__input'
				/>
				{pharmacy && (
					<SelectComponent
						title={system.pharmacy}
						name='uidPharmacy'
						placeholder={system.pharmacy}
						data={pharmacy}
						error={
							errors.uidPharmacy || formateError({ error, name: 'uidPharmacy' })
						}
						control={control}
						className='formRegisterPatient__input'
					/>
				)}
				<Btn
					title={`botón para ${isUpdate ? 'actualizar' : 'crear'} medicamentos`}
					CN={{ className: 'btn--form formMedication__btn' }}
					text={isUpdate ? 'Actualizar' : 'Crear'}
					type='submit'
				/>
			</form>
		</section>
	);
};

export default FormMedicationAdmin;
