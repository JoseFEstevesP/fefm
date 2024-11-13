import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataFamily from '../../formPatientDataFamily';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateFamilyDTOSchema,
	UpdateFamilyDTOSchemaType,
} from './dto/updateFamilyPatient.dto';

export const FormUpdateFamilyPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, loading, updateData } = useUpdatePatient({
		url: '/patients/updateFamily',
		uid: data.uid,
		modalClose,
		handleGetData,
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UpdateFamilyDTOSchemaType>({
		resolver: zodResolver(UpdateFamilyDTOSchema),
	});
	useEffect(() => {
		if (data) {
			reset({ ...data });
		}
	}, [data, reset]);
	useEffect(() => {
		if (updateData) {
			handleNewData(updateData);
		}
	}, [handleNewData, updateData]);
	return (
		<FormPatientDataFamily
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleUpdate)}
			loading={loading}
			register={register}
			update={true}
		/>
	);
};
