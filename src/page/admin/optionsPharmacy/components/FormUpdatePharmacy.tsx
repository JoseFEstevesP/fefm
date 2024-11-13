import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useUpdate from '../../../../hooks/useUpdate';
import {
	UserAdminPharmacyDTOSchema,
	UserAdminPharmacyDTOSchemaType,
} from '../dto/UserAdminPharmacy.dto';
import FormPharmacy from './FormPharmacy';

const FormUpdatePharmacy = ({
	data: dataDefault,
	closeModal,
	handleGetData,
	setData,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<UserAdminPharmacyDTOSchemaType>({
		resolver: zodResolver(UserAdminPharmacyDTOSchema),
	});

	const { error, handleUpdate } = useUpdate({ fetchData: handleGetData });

	useEffect(() => {
		if (dataDefault) {
			reset(dataDefault);
		}
	}, [dataDefault, reset]);

	const handleDataRegisterPharmacy = useCallback(
		(data: UserAdminPharmacyDTOSchemaType) => {
			setData({
				...dataDefault,
				...data,
			});
			handleUpdate({
				url: '/pharmacy',
				data: { ...dataDefault, ...data },
				reset,
				closeModal: closeModal && closeModal,
			});
		},
		[closeModal, dataDefault, handleUpdate, reset, setData],
	);
	const value = useWatch({ control });

	return (
		<FormPharmacy
			handleSubmit={handleSubmit(handleDataRegisterPharmacy)}
			control={control}
			error={error}
			errors={errors}
			register={register}
			value={value}
		/>
	);
};
export default FormUpdatePharmacy;
