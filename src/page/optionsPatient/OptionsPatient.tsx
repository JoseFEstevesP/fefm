import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import FilterData from '../../components/filter/FilterData';
import useModal from '../../components/modal/hooks/useModal';
import Modal from '../../components/modal/Modal';
import Pagination from '../../components/pagination/Pagination';
import Restricted from '../../components/restricted/Restricted';
import { Table } from '../../components/table/Table';
import { transformEnum } from '../../helper/transformEnum';
import useFilter from '../../hooks/useFilter';
import useHandleData from '../../hooks/useHandleData';
import useValidate from '../../hooks/useValidate';
import { FindAllData } from '../../typeGlobal';
import { Permission } from '../admin/optionsRol/enum/dataRol';
import { OrderMedicationRequestProperty } from '../optionsMedication/enum/data';
import './../../style/optionsPages.scss';
import { OrderPatientsPropertyEnum, textOrderPatients } from './enum/data';
import { DataPatient, PatientDataTypes } from './optionsPatientProps';

const FormRegisterPatient = lazy(
	() => import('./components/formRegisterPatient/FormRegisterPatient'),
);
const FormActionsPatient = lazy(
	() => import('./components/formActionPatient/FormActionPatient'),
);

const OptionsPatient = ({ className, admin }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<PatientDataTypes>>({
		url: admin ? '/patients/admin' : '/patients',
	});

	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: OrderMedicationRequestProperty.ci,
		});

	const { isOpen, handleOpen, handleClose } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<DataPatient | null>(null);

	const handleDataUpdate = useCallback(
		data => {
			setUpdateData(data);
			handleOpenAction();
		},
		[handleOpenAction],
	);

	const handleGetData = useCallback(() => {
		fetchData({ params: filter });
	}, [fetchData, filter]);

	useEffect(() => {
		if (handleData({ per: Permission.patientsRead })) {
			handleGetData();
		}
	}, [handleData, handleGetData]);

	return (
		<section className={`optionsPage ${className}`}>
			<Restricted per={Permission.patientsAdd}>
				<Modal isOpen={isOpen} handleClose={handleClose}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormRegisterPatient
							closeModal={handleClose}
							handleGetData={handleGetData}
						/>
					</Suspense>
				</Modal>
			</Restricted>
			{(handleData({ per: Permission.patientsDelete }) ||
				handleData({ per: Permission.patientsUpdate })) && (
				<Modal isOpen={isOpenAction} handleClose={handleCloseAction}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormActionsPatient
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
							admin={admin}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderPatientsPropertyEnum.ci}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={{ handleOpen, text: 'Registro de paciente' }}
				permissions={{
					add: Permission.patientsAdd,
					read: Permission.patientsRead,
				}}
				selectOptions={{
					orderPropertyOptions: OrderPatientsPropertyEnum,
					textOrderProperty: textOrderPatients,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.patientsRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: OrderPatientsPropertyEnum,
									text: textOrderPatients,
								})}
								body={data.rows.map(item => {
									return {
										uidPatient: item.uid,
										...item.patientDataUser,
										medicationRequest: item.medicationRequest,
										patientDataUser: item.patientDataUser,
										patientDataAuthorized: item.patientDataAuthorized,
										patientDataEconomic: item.patientDataEconomic,
										patientDataFamily: item.patientDataFamily,
										patientDataHousing: item.patientDataHousing,
										patientDataHousingEx: item.patientDataHousingEx,
										patientDataMedical: item.patientDataMedical,
									};
								})}
								actionUpdate={handleData({ per: Permission.patientsUpdate })}
								actionDelete={handleData({ per: Permission.patientsDelete })}
								handelAction={handleDataUpdate}
							/>
							<Pagination
								pages={data.pages}
								currentPage={data.currentPage}
								handleData={handlePagination}
							/>
						</>
					) : (
						<div>Loading data...</div>
					)}
				</section>
			</Restricted>
		</section>
	);
};

export default OptionsPatient;
