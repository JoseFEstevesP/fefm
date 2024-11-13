import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
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
import './../../style/optionsPages.scss';
import {
	headerMedicationRequestProperty,
	headerTextOrderMedication,
	OrderMedicationRequestProperty,
	textOrderMedication,
} from './enum/data';
import { MedicationRequest } from './optionsMedicationProps';

const FormRegisterMedication = lazy(
	() => import('./components/FormRegisterMedication'),
);
const FormActionsMedication = lazy(
	() => import('./components/FormActionMedication'),
);
const OptionsMedication = ({ className, admin }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<MedicationRequest>>({
		url: admin ? '/medication/admin' : '/medication',
	});
	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: 'ci',
		});

	const handleGetData = useCallback(() => {
		fetchData({ params: filter });
	}, [fetchData, filter]);

	useEffect(() => {
		if (handleData({ per: Permission.medicationRequestRead })) {
			handleGetData();
		}
	}, [handleData, handleGetData]);

	const { handleClose, isOpen, handleOpen } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<MedicationRequest | null>(null);

	const handleDataUpdate = useCallback(
		data => {
			setUpdateData({ ...data, quantity: `${data.quantity}` });
			handleOpenAction();
		},
		[handleOpenAction],
	);

	return (
		<section className={`optionsPage ${className}`}>
			<Restricted per={Permission.medicationRequestAdd}>
				<Modal isOpen={isOpen} handleClose={handleClose}>
					<Suspense fallback={<h2>Loading...</h2>}>
						<FormRegisterMedication
							closeModal={handleClose}
							handleGetData={handleGetData}
						/>
					</Suspense>
				</Modal>
			</Restricted>
			{(handleData({ per: Permission.medicationRequestDelete }) ||
				handleData({ per: Permission.medicationRequestUpdate })) && (
				<Modal isOpen={isOpenAction} handleClose={handleCloseAction}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormActionsMedication
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
							admin={admin}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderMedicationRequestProperty.ci}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={admin ? undefined : { handleOpen, text: 'Solicitar medicamento' }}
				permissions={{
					add: Permission.medicationRequestAdd,
					read: Permission.medicationRequestRead,
				}}
				selectOptions={{
					orderPropertyOptions: OrderMedicationRequestProperty,
					textOrderProperty: textOrderMedication,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.medicationRequestRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: admin
										? headerMedicationRequestProperty
										: OrderMedicationRequestProperty,
									text: admin ? headerTextOrderMedication : textOrderMedication,
								})}
								body={data.rows}
								actionUpdate={handleData({
									per: Permission.medicationRequestUpdate,
								})}
								actionDelete={handleData({
									per: Permission.medicationRequestDelete,
								})}
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
export default OptionsMedication;
