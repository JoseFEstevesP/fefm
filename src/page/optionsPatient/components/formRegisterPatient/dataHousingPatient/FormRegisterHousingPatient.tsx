import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import FormPatientDataHousing from '../../formPatientDataHousing';
import useRegisterPatient from '../hooks/useRegisterPatiens';
import './../formRegisterPatient.scss';
import {
	RegisterHousingDTOSchema,
	RegisterHousingDTOSchemaType,
} from './dto/registerHousingPatient.dto';

export const FormRegisterHousingPatient = ({ setData, setResRegister }) => {
	const { error, handleSubmitRegister, loading } = useRegisterPatient({
		url: '/patients/housing',
		setResRegister,
		setData,
		nameRegister: 'housing',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<RegisterHousingDTOSchemaType>({
		resolver: zodResolver(RegisterHousingDTOSchema),
	});
	const value = useWatch({ control });

	return (
		<FormPatientDataHousing
			control={control}
			error={error}
			errors={errors}
			handleSubmit={handleSubmit(handleSubmitRegister)}
			loading={loading}
			register={register}
			value={value}
		/>
	);
};
