import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../../hooks/useGet';
import {
	medicationRequest,
	patientDataAuthorized,
	patientDataEconomic,
	patientDataFamily,
	patientDataHousing,
	patientDataHousingEx,
	patientDataMedical,
	patientDataUser,
} from '../optionsPatient/functions/formaterData';
import SectionDataMR from './components/SectionDataMR';
import SectionDataPatient from './components/SectionDataPatient';
import { PatientDataBY_CI } from './dataPatientQRProps';

const DataPatientQR = () => {
	const { code } = useParams();
	const { getData } = useGet();
	const [dataPatient, setDataPatient] = useState<PatientDataBY_CI | null>(null);
	const [loading, setLoading] = useState(false);
	
	const handleData = useCallback(async () => {
		setLoading(true);
		try {
			const data: PatientDataBY_CI = await getData({
				url: `/patients/oneByCI_QR/${code}`,
			});
			setDataPatient(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		handleData();
	}, []);

	console.log("DataPatientQR -> dataPatient:", dataPatient)
		console.log("DataPatientQR -> code:", code)
	if (loading) {
		return <div className='loading'>Cargando...</div>;
	}

	if (!dataPatient) {
		return <div className='loading'>No se encontraron datos</div>;
	}

	return (
		<>
			{dataPatient && (
				<>
					<SectionDataPatient data={patientDataUser(dataPatient)} />
					<SectionDataPatient data={patientDataMedical(dataPatient)} />
					<SectionDataPatient data={patientDataHousing(dataPatient)} />
					<SectionDataPatient data={patientDataHousingEx(dataPatient)} />
					<SectionDataPatient data={patientDataEconomic(dataPatient)} />
					<SectionDataPatient data={patientDataFamily(dataPatient)} />
					{dataPatient && dataPatient.patientDataAuthorized.ci && (
						<SectionDataPatient data={patientDataAuthorized(dataPatient)} />
					)}
					{dataPatient && dataPatient.medicationRequest.length > 0 && (
						<SectionDataMR data={medicationRequest(dataPatient)} />
					)}
				</>
			)}
		</>
	);
};
export default DataPatientQR;
