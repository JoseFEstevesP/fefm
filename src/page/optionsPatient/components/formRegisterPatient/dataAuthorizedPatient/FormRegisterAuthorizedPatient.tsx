import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataAuthorized from '../../formPatientDataAuthorized';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterAuthorizedDTOSchema,
	RegisterAuthorizedDTOSchemaType,
} from './dto/registerAuthorizedPatient.dto';

export const FormRegisterAuthorizedPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/authorized',
		setResRegister,
		setData,
		nameRegister: 'authorized',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<RegisterAuthorizedDTOSchemaType>({
		resolver: zodResolver(RegisterAuthorizedDTOSchema),
	});
	const [active, setActive] = useState(false);

	useEffect(() => {
		reset({ persons_data: active });
	}, [active, reset]);

	return (
		<FormPatientDataAuthorized
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
			register={register}
			active={active}
			setActive={setActive}
			handleSubmitRegister={() => handleSubmitRegister({ persons_data: false })}
		/>
	);
};
