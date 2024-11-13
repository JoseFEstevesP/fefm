import { useCallback } from 'react';
import useImgFile from '../../../hooks/useImgFile';
import useUpdate from '../../../hooks/useUpdate';
import { UpdateMedicationDTOSchemaType } from '../dto/formUpdateMedication.dto';

const useMedicationRequestUpdate = ({
	closeModal,
	reset,
	fetchData,
	setData,
	dataDefault,
}) => {
	const { handleUpdate, error, loading } = useUpdate({
		fetchData,
	});

	const { handleData: handleDataPhotoRecipe } = useImgFile();
	const { handleData: handleDataPhotoMedicalReport } = useImgFile();

	const handleSubmitUpdate = useCallback(
		async (data: UpdateMedicationDTOSchemaType) => {
			const registerData = { ...data };

			if (
				data.photo_recipe &&
				data.photo_recipe instanceof FileList &&
				data.photo_recipe.length > 0
			) {
				const photoRecipeName = await handleDataPhotoRecipe({
					ci: data.ci,
					nameFile: 'photo_recipe',
					photo: data.photo_recipe,
				});
				registerData.photo_recipe = photoRecipeName.data;
			}

			if (
				data.photo_medical_report &&
				data.photo_medical_report instanceof FileList &&
				data.photo_medical_report.length > 0
			) {
				const photoMedicalReportName = await handleDataPhotoMedicalReport({
					ci: data.ci,
					nameFile: 'photo_medical_report',
					photo: data.photo_medical_report,
				});
				registerData.photo_medical_report = photoMedicalReportName.data;
			}
			setData({ ...dataDefault, ...registerData });
			handleUpdate({
				data: registerData,
				url: '/medication',
				closeModal,
				reset,
			});
		},
		[
			closeModal,
			dataDefault,
			handleDataPhotoMedicalReport,
			handleDataPhotoRecipe,
			handleUpdate,
			reset,
			setData,
		],
	);

	return {
		handleSubmitUpdate,
		error,
		loading,
	};
};
export default useMedicationRequestUpdate;
