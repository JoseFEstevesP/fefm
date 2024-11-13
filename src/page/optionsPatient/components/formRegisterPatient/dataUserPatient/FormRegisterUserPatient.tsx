import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { ContextProfile } from '../../../../../context/profile/ProfileContext';
import { PatientEnum, YN } from '../../../../../enum/data';
import FormPatientDataUser from '../../formPatientDataUser';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterDataUserDTOSchema,
	RegisterDataUserDTOSchemaType,
} from './dto/registerDataUserPatient.dto';

export const FormRegisterUserPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/user',
		setResRegister,
		setData,
		nameRegister: 'user',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<RegisterDataUserDTOSchemaType>({
		resolver: zodResolver(RegisterDataUserDTOSchema),
	});
	const { profile } = useContext(ContextProfile);

	const value = useWatch({ control });
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setDisabled(value.patient === PatientEnum.p);
			if (value.patient === PatientEnum.p) {
				try {
					reset({
						...value,
						...profile,
					});
				} catch (error) {
					console.error('Error fetching user profile:', error);
				} finally {
				}
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value.patient, reset]);

	useEffect(() => {
		if (value.children === YN.no) {
			reset({ ...value, number_of_children: '0' });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reset, value.children]);

	return (
		<FormPatientDataUser
			control={control}
			disabled={disabled}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
			register={register}
			value={value}
		/>
	);
};
