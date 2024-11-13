import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataMedical from '../../formPatientDataMedical';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateMedicalDTOSchema,
	UpdateMedicalDTOSchemaType,
} from './dto/updateMedicalPatient.dto';

export const FormUpdateMedicalPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, loading, updateData } = useUpdatePatient({
		url: '/patients/updateMedical',
		uid: data.uid,
		modalClose,
		handleGetData,
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<UpdateMedicalDTOSchemaType>({
		resolver: zodResolver(UpdateMedicalDTOSchema),
	});
	useEffect(() => {
		if (data) {
			const {
				medical_disability,
				health_care_safety_plan,
				name_of_health_care_facility,
				medical_specialty,
				treating_physician_name,
				daily_dosage,
				uidPathology,
				uidMedicament,
			} = data;
			reset({
				medical_disability,
				health_care_safety_plan,
				name_of_health_care_facility,
				medical_specialty,
				treating_physician_name,
				daily_dosage,
				uidPathology,
				uidMedicament,
			});
		}
	}, [data, reset]);
	useEffect(() => {
		if (updateData) {
			handleNewData(updateData);
		}
	}, [handleNewData, updateData]);

	return (
		<FormPatientDataMedical
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleUpdate)}
			loading={loading}
			register={register}
			update={true}
		/>
	);
};
