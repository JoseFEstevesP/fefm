import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormPatientDataEconomic from '../../formPatientDataEconomic';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterEconomicDTOSchema,
	RegisterEconomicDTOSchemaType,
} from './dto/registerEconomicPatient.dto';

export const FormRegisterEconomicPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/economic',
		setResRegister,
		setData,
		nameRegister: 'economic',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<RegisterEconomicDTOSchemaType>({
		resolver: zodResolver(RegisterEconomicDTOSchema),
	});

	useEffect(() => {
		reset({
			monthly_income: 'Bs. ',
			average_monthly_fixed_expenses: 'Bs. ',
			average_monthly_variable_expenses: 'Bs. ',
		});
	}, [reset]);
	return (
		<FormPatientDataEconomic
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
			register={register}
		/>
	);
};
