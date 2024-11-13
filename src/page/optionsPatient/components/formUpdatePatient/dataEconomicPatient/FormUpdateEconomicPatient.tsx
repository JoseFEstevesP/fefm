import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataEconomic from '../../formPatientDataEconomic';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateEconomicDTOSchema,
	UpdateEconomicDTOSchemaType,
} from './dto/updateEconomicPatient.dto';

export const FormUpdateEconomicPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, loading, updateData } = useUpdatePatient({
		url: '/patients/updateEconomic',
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
	} = useForm<UpdateEconomicDTOSchemaType>({
		resolver: zodResolver(UpdateEconomicDTOSchema),
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
		<FormPatientDataEconomic
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
