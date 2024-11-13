import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useModalImg from '../../../hooks/useModalImg';
import usePreviewImg from '../../../hooks/usePreviewImg';
import {
	RegisterMedicationDTOSchema,
	RegisterMedicationDTOSchemaType,
} from '../dto/formRegisterMedication.dto';
import useMedicationRequestRegister from '../hooks/useMedicationRequestRegister';
import FormMedication from './FormMedication';
import './formRegisterMedication.scss';

const FormRegisterMedicationRequest = ({ closeModal, handleGetData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<RegisterMedicationDTOSchemaType>({
		resolver: zodResolver(RegisterMedicationDTOSchema),
	});

	const [photoRecipe, setPhotoRecipe] = useState<string | null>(null);
	const [photoMedicalReport, setPhotoMedicalReport] = useState<string | null>(
		null,
	);

	const { error, handleSubmitRegisterFunction, loading } =
		useMedicationRequestRegister({
			closeModal,
			reset,
			handleGetData,
		});

	const { handleClose, handleImageModal, isOpen, urlModal } = useModalImg();
	const value = useWatch({ control });
	const { imagePreview } = usePreviewImg();

	useEffect(() => {
		if (value?.photo_recipe?.length === 1) {
			imagePreview({ value: value.photo_recipe, seImg: setPhotoRecipe });
		}
		if (value?.photo_medical_report?.length === 1) {
			imagePreview({
				value: value.photo_medical_report,
				seImg: setPhotoMedicalReport,
			});
		}
	}, [imagePreview, value.photo_medical_report, value.photo_recipe]);

	const handleSubmitData = useCallback(
		dataSubmit => {
			if (dataSubmit.photo_recipe.length === 0) {
				dataSubmit.photo_recipe = photoRecipe;
			}
			if (dataSubmit.photo_medical_report.length === 0) {
				dataSubmit.photo_medical_report = photoMedicalReport;
			}
			handleSubmitRegisterFunction(dataSubmit);
		},
		[photoRecipe, photoMedicalReport, handleSubmitRegisterFunction],
	);

	return (
		<FormMedication
			handleSubmit={handleSubmit(handleSubmitData)}
			error={error}
			errors={errors}
			register={register}
			loading={loading}
			handleClose={handleClose}
			isOpen={isOpen}
			photoRecipe={photoRecipe}
			handleImageModal={handleImageModal}
			photoMedicalReport={photoMedicalReport}
			urlModal={urlModal && urlModal}
		/>
	);
};

export default FormRegisterMedicationRequest;
