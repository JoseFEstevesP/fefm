import { useCallback } from 'react';
import useImgFile from '../../../hooks/useImgFile';
import useRegister from '../../../hooks/useRegister';
import { RegisterMedicationDTOSchemaType } from '../dto/formRegisterMedication.dto';

const useMedicationRequestRegister = ({ closeModal, reset, handleGetData }) => {
	const { error, handleSubmitRegister, loading } =
		useRegister<RegisterMedicationDTOSchemaType>({
			url: '/medication',
			handleGetData,
		});

	const { handleData: handleDataPhotoRecipe } = useImgFile();
	const { handleData: handleDataPhotoMedicalReport } = useImgFile();

	const handleSubmitRegisterFunction = useCallback(
		async data => {
			try {
				const [photoRecipeResponse, photoMedicalReportResponse] =
					await Promise.all([
						handleDataPhotoRecipe({
							ci: data.ci,
							nameFile: 'photo_recipe',
							photo: data.photo_recipe,
						}),
						handleDataPhotoMedicalReport({
							ci: data.ci,
							nameFile: 'photo_medical_report',
							photo: data.photo_medical_report,
						}),
					]);

				const registerData = {
					...data,
					photo_recipe: photoRecipeResponse.data,
					photo_medical_report: photoMedicalReportResponse.data,
				};

				await handleSubmitRegister({ data: registerData, closeModal, reset });
			} catch (err) {
				console.error('Error al registrar la solicitud de medicamento:', err);
			}
		},
		[
			closeModal,
			handleDataPhotoMedicalReport,
			handleDataPhotoRecipe,
			handleSubmitRegister,
			reset,
		],
	);

	return {
		handleSubmitRegisterFunction,
		error,
		loading,
	};
};

export default useMedicationRequestRegister;
