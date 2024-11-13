import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import FormPatientDataHousing from '../../formPatientDataHousing';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateHousingDTOSchema,
	UpdateHousingDTOSchemaType,
} from './dto/updateHousingPatient.dto';

export const FormUpdateHousingPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, loading, updateData } = useUpdatePatient({
		url: '/patients/updateHousing',
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
	} = useForm<UpdateHousingDTOSchemaType>({
		resolver: zodResolver(UpdateHousingDTOSchema),
	});
	const value = useWatch({ control });
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
		<FormPatientDataHousing
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleUpdate)}
			loading={loading}
			register={register}
			value={value}
			update={true}
		/>
	);
};
