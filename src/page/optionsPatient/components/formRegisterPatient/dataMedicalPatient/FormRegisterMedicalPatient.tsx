import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormPatientDataMedical from '../../formPatientDataMedical';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterMedicalDTOSchema,
	RegisterMedicalDTOSchemaType,
} from './dto/registerMedicalPatient.dto';

export const FormRegisterMedicalPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/medical',
		setResRegister,
		setData,
		nameRegister: 'medical',
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<RegisterMedicalDTOSchemaType>({
		resolver: zodResolver(RegisterMedicalDTOSchema),
	});

	return (
		<FormPatientDataMedical
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
			register={register}
		/>
	);
};
