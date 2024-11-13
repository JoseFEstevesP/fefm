import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormPatientDataFamily from '../../formPatientDataFamily';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterFamilyDTOSchema,
	RegisterFamilyDTOSchemaType,
} from './dto/registerFamilyPatient.dto';

export const FormRegisterFamilyPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/family',
		setResRegister,
		setData,
		nameRegister: 'family',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFamilyDTOSchemaType>({
		resolver: zodResolver(RegisterFamilyDTOSchema),
	});

	return (
		<FormPatientDataFamily
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
			register={register}
		/>
	);
};
