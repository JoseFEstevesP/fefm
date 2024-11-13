import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataAuthorized from '../../formPatientDataAuthorized';
import useUpdatePatient from '../hooks/useUpdatePatient';
import {
	UpdateAuthorizedDTOSchema,
	UpdateAuthorizedDTOSchemaType,
} from './dto/updateAuthorizedPatient.dto';

export const FormUpdateAuthorizedPatient = ({
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const { handleUpdate, error, updateData, loading } = useUpdatePatient({
		url: '/patients/updateAuthorized',
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
	} = useForm<UpdateAuthorizedDTOSchemaType>({
		resolver: zodResolver(UpdateAuthorizedDTOSchema),
	});
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (data.persons_data) {
			setActive(true);
			reset({ ...data });
		} else {
			setActive(false);
			reset({
				persons_data: false,
				ci: '',
				first_name: '',
				middle_name: '',
				first_surname: '',
				last_surname: '',
			});
		}
	}, [data, reset]);

	useEffect(() => {
		if (updateData) {
			handleNewData(updateData);
		}
	}, [handleNewData, updateData]);

	const handleDataUpdate = useCallback(
		data => {
			data.persons_data = true;
			handleUpdate(data);
		},
		[handleUpdate],
	);

	return (
		<FormPatientDataAuthorized
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleDataUpdate)}
			loading={loading}
			register={register}
			active={active}
			setActive={setActive}
			handleSubmitRegister={() => handleUpdate({ persons_data: false })}
			update={true}
		/>
	);
};
