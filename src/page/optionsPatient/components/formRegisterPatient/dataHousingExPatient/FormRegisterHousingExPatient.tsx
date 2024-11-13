import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormPatientDataHousingEx from '../../formPatientDataHousingEx';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterHousingExDTOSchema,
	RegisterHousingExDTOSchemaType,
} from './dto/registerHousingExPatient.dto';

export const FormRegisterHousingExPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/housingEx',
		setResRegister,
		setData,
		nameRegister: 'housingEx',
	});
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<RegisterHousingExDTOSchemaType>({
		resolver: zodResolver(RegisterHousingExDTOSchema),
	});

	return (
		<FormPatientDataHousingEx
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
		/>
	);
};
