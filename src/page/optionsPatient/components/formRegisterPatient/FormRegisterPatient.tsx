import { useEffect, useMemo, useState } from 'react';
import { FormRegisterAuthorizedPatient } from './dataAuthorizedPatient/FormRegisterAuthorizedPatient';
import { FormRegisterEconomicPatient } from './dataEconomicPatient/FormRegisterEconomicPatient';
import { FormRegisterFamilyPatient } from './dataFamilyPatient/FormRegisterFamilyPatient';
import { FormRegisterHousingExPatient } from './dataHousingExPatient/FormRegisterHousingExPatient';
import { FormRegisterHousingPatient } from './dataHousingPatient/FormRegisterHousingPatient';
import { FormRegisterMedicalPatient } from './dataMedicalPatient/FormRegisterMedicalPatient';
import { FormRegisterUserPatient } from './dataUserPatient/FormRegisterUserPatient';
import './formRegisterPatient.scss';
import { DataRegisterPatient } from './formRegisterPatientTypes';
import useRegister from '../../../../hooks/useRegister';

const FormRegisterPatient = ({
	closeModal,
	handleGetData,
}: {
	closeModal: () => void;
	handleGetData: () => void;
}) => {
	const [resRegister, setResRegister] = useState({
		user: false,
		housing: false,
		housingEx: false,
		family: false,
		medical: false,
		economic: false,
		authorized: false,
	});
	const [dataP, setDataP] = useState<
		DataRegisterPatient | Record<string, string>
	>(
		sessionStorage.getItem('dataUserPatient') &&
			JSON.parse(sessionStorage.getItem('dataUserPatient') || '{}'),
	);
	const { handleSubmitRegister } = useRegister<
		DataRegisterPatient | Record<string, string>
	>({ url: '/patients' });

	useEffect(() => {
		if (sessionStorage.getItem('dataUserPatient')) {
			Object.keys(
				JSON.parse(sessionStorage.getItem('dataUserPatient') || '{}'),
			).forEach(item => {
				setResRegister(prev => ({
					...prev,
					[item.charAt(7).toLowerCase() + item.slice(8)]: true,
				}));
			});
		}
	}, []);

	useEffect(() => {
		if (dataP) {
			sessionStorage.setItem('dataUserPatient', JSON.stringify(dataP));
		}
	}, [dataP]);

	const formComponents = {
		user: FormRegisterUserPatient,
		housing: FormRegisterHousingPatient,
		housingEx: FormRegisterHousingExPatient,
		family: FormRegisterFamilyPatient,
		medical: FormRegisterMedicalPatient,
		economic: FormRegisterEconomicPatient,
		authorized: FormRegisterAuthorizedPatient,
	};

	const formOrder = useMemo(
		() => [
			'user',
			'housing',
			'housingEx',
			'family',
			'medical',
			'economic',
			'authorized',
		],
		[],
	);

	useEffect(() => {
		if (resRegister[formOrder[formOrder.length - 1]]) {
			handleSubmitRegister({ data: dataP, closeModal });
			setResRegister({
				user: false,
				housing: false,
				housingEx: false,
				family: false,
				medical: false,
				economic: false,
				authorized: false,
			});
			sessionStorage.removeItem('dataUserPatient');
		}
		return () => {
			if (resRegister[formOrder[formOrder.length - 1]]) {
				handleGetData();
			}
		};
	}, [
		closeModal,
		dataP,
		formOrder,
		handleGetData,
		handleSubmitRegister,
		resRegister,
	]);

	const renderNextForm = () => {
		for (const formKey of formOrder) {
			if (resRegister[formKey] !== true) {
				const FormComponent = formComponents[formKey];
				return (
					<FormComponent
						key={formKey}
						setData={setDataP}
						setResRegister={setResRegister}
					/>
				);
			}
		}
		return null;
	};

	return (
		<section className={`formRegisterPatient box`}>{renderNextForm()}</section>
	);
};

export default FormRegisterPatient;
