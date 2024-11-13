import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataHousingEx from '../../formPatientDataHousingEx';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateHousingExDTOSchema,
	UpdateHousingExDTOSchemaType,
} from './dto/updateHousingExPatient.dto';

export const FormUpdateHousingExPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, loading, updateData } = useUpdatePatient({
		url: '/patients/updateHousingEx',
		uid: data.uid,
		modalClose,
		handleGetData,
	});
	const {
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<UpdateHousingExDTOSchemaType>({
		resolver: zodResolver(UpdateHousingExDTOSchema),
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
		<FormPatientDataHousingEx
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleUpdate)}
			loading={loading}
			update={true}
		/>
	);
};
