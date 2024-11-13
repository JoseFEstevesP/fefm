import { Btn } from '../../../components/button/Btn';
import { Input } from '../../../components/input/Input';
import Modal from '../../../components/modal/Modal';
import { formateError } from '../../../functions/formaterError';
import { system } from '../../../systemText';
import { RegisterMedicationDTOSchemaType } from '../dto/formRegisterMedication.dto';
import { UpdateMedicationDTOSchemaType } from '../dto/formUpdateMedication.dto';
import { FormMedicationProps } from '../optionsMedicationProps';

const FormMedication = ({
	handleSubmit,
	errors,
	error,
	register,
	loading,
	urlModal,
	handleClose,
	isOpen,
	photoRecipe,
	handleImageModal,
	photoMedicalReport,
	isUpdate = false,
}: FormMedicationProps<
	RegisterMedicationDTOSchemaType | UpdateMedicationDTOSchemaType
>) => {
	return (
		<section className={`formMedication`}>
			{urlModal && handleClose && isOpen && (
				<Modal handleClose={handleClose} isOpen={isOpen}>
					<img src={urlModal} alt='' />
				</Modal>
			)}
			<h2 className='formMedication__title'>
				{loading ? 'Cargando' : 'Solicitud de medicamentos'}
			</h2>
			<form className='formMedication__form' onSubmit={handleSubmit}>
				<Input
					name={'ci'}
					placeholder={system.ci}
					register={register}
					error={errors.ci || formateError({ error, name: 'ci' })}
					type='number'
					className='formMedication__input'
					label='*'
				/>
				{photoRecipe && (
					<img
						className='formMedication__img'
						onClick={handleImageModal}
						src={photoRecipe}
						alt=''
					/>
				)}
				<Input
					name={'photo_recipe'}
					placeholder={system.photo_recipe}
					register={register}
					error={errors.photo_recipe}
					type='file'
					className='formMedication__input'
					label='*'
				/>
				{photoMedicalReport && (
					<img
						className='formMedication__img'
						onClick={handleImageModal}
						src={photoMedicalReport}
						alt=''
					/>
				)}
				<Input
					name={'photo_medical_report'}
					placeholder={system.photo_medical_report}
					register={register}
					error={errors.photo_medical_report}
					type='file'
					className='formMedication__input'
					label='*'
				/>
				<Input
					name={'date_of_medical_report'}
					placeholder={system.date_of_medical_report}
					register={register}
					error={
						errors.date_of_medical_report ||
						formateError({ error, name: 'date_of_medical_report' })
					}
					className='formRegisterPatient__input'
					type='date'
					label='*'
				/>
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

export default FormMedication;
