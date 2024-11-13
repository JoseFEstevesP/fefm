import { FormUpdateAuthorizedPatient } from './dataAuthorizedPatient/FormUpdateAuthorizedPatient';
import { FormUpdateEconomicPatient } from './dataEconomicPatient/FormUpdateEconomicPatient';
import { FormUpdateFamilyPatient } from './dataFamilyPatient/FormUpdateFamilyPatient';
import { FormUpdateHousingExPatient } from './dataHousingExPatient/FormUpdateHousingExPatient';
import { FormUpdateHousingPatient } from './dataHousingPatient/FormUpdateHousingPatient';
import { FormUpdateMedicalPatient } from './dataMedicalPatient/FormUpdateMedicalPatient';
import { FormUpdateUserPatient } from './dataUserPatient/FormUpdateUserPatient';

const FormUpdatePatient = ({
	keyData,
	data,
	modalClose,
	handleNewData,
	handleGetData,
}) => {
	const formComponents = {
		patientDataAuthorized: FormUpdateAuthorizedPatient,
		patientDataEconomic: FormUpdateEconomicPatient,
		patientDataFamily: FormUpdateFamilyPatient,
		patientDataHousing: FormUpdateHousingPatient,
		patientDataHousingEx: FormUpdateHousingExPatient,
		patientDataUser: FormUpdateUserPatient,
		patientDataMedical: FormUpdateMedicalPatient,
	};

	const SelectedComponent = formComponents[keyData];

	return (
		<>
			{SelectedComponent && (
				<SelectedComponent
					data={data}
					modalClose={modalClose}
					handleNewData={handleNewData}
					handleGetData={handleGetData}
				/>
			)}
		</>
	);
};

export default FormUpdatePatient;
