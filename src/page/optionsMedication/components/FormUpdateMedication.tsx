import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useFormaterImg from '../../../hooks/useFormaterImg';
import useModalImg from '../../../hooks/useModalImg';
import usePreviewImg from '../../../hooks/usePreviewImg';
import {
	UpdateMedicationDTOSchema,
	UpdateMedicationDTOSchemaType,
} from '../dto/formUpdateMedication.dto';
import useMedicationRequestUpdate from '../hooks/useMedicationRequestUpdate';
import { MedicationRequest } from '../optionsMedicationProps';
import FormMedication from './FormMedication';
import './formRegisterMedication.scss';

const FormUpdateMedicationRequest = ({
	closeModal,
	data,
	handleGetData,
	setData,
}: {
	closeModal: () => void;
	data: MedicationRequest | null;
	handleGetData: () => void;
	setData: React.Dispatch<React.SetStateAction<MedicationRequest | null>>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<UpdateMedicationDTOSchemaType>({
		resolver: zodResolver(UpdateMedicationDTOSchema),
	});

	useEffect(() => {
		const defaultData = { ...data };
		if (defaultData) {
			if ('photo_recipe' in defaultData) {
				delete defaultData.photo_recipe;
			}
			if ('photo_medical_report' in defaultData) {
				delete defaultData.photo_medical_report;
			}
			reset(defaultData);
		}
	}, [data, reset]);

	const { handleFormaterData } = useFormaterImg();
	const [photoRecipe, setPhotoRecipe] = useState<string | null>(null);
	const [photoMedicalReport, setPhotoMedicalReport] = useState<string | null>(
		null,
	);
	useEffect(() => {
		if (data) {
			handleFormaterData({
				url: `${data?.photo_recipe}`,
				setImg: setPhotoRecipe,
			});
			handleFormaterData({
				url: `${data?.photo_medical_report}`,
				setImg: setPhotoMedicalReport,
			});
		}
	}, [data, data?.photo_recipe, handleFormaterData]);

	const { handleSubmitUpdate, error, loading } = useMedicationRequestUpdate({
		closeModal,
		reset,
		fetchData: handleGetData,
		setData,
		dataDefault: data,
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
				dataSubmit.photo_recipe = data?.photo_recipe;
			}
			if (dataSubmit.photo_medical_report.length === 0) {
				dataSubmit.photo_medical_report = data?.photo_medical_report;
			}

			handleSubmitUpdate({ uid: data?.uid, ...dataSubmit });
		},
		[data, handleSubmitUpdate],
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
			isUpdate={true}
		/>
	);
};
export default FormUpdateMedicationRequest;
