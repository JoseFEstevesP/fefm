import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { ContextProfile } from '../../../../../context/profile/ProfileContext';
import FormPatientDataUser from '../../formPatientDataUser';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateDataUserDTOSchema,
	UpdateDataUserDTOSchemaType,
} from './dto/updateDataUserPatient.dto';

export const FormUpdateUserPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, loading, updateData } = useUpdatePatient({
		url: '/patients/updateUser',
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
	} = useForm<UpdateDataUserDTOSchemaType>({
		resolver: zodResolver(UpdateDataUserDTOSchema),
	});
	const value = useWatch({ control });
	const [disabled, setDisabled] = useState(false);
	const { profile } = useContext(ContextProfile);

	useEffect(() => {
		if (data) {
			if (profile) {
				setDisabled(data.ci === profile.ci);
				reset({ ...data });
			}
		}
	}, [data, profile, reset]);

	useEffect(() => {
		if (updateData) {
			handleNewData(updateData);
		}
	}, [handleNewData, updateData]);

	return (
		<FormPatientDataUser
			control={control}
			disabled={disabled}
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
