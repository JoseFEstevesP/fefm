import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import FilterData from '../../../components/filter/FilterData';
import useModal from '../../../components/modal/hooks/useModal';
import Modal from '../../../components/modal/Modal';
import Pagination from '../../../components/pagination/Pagination';
import Restricted from '../../../components/restricted/Restricted';
import { Table } from '../../../components/table/Table';
import { transformEnum } from '../../../helper/transformEnum';
import useFilter from '../../../hooks/useFilter';
import useHandleData from '../../../hooks/useHandleData';
import useValidate from '../../../hooks/useValidate';
import { FindAllData } from '../../../typeGlobal';
import { Permission } from '../optionsRol/enum/dataRol';
import {
	HeaderTableMedicament,
	OrderMedicationProperty,
	textOrderMedicament,
} from './enum/enumMedicament';
import { MedicamentStructure } from './medicamentTypeData';

const FormRegisterMedicament = lazy(
	() => import('./components/FormRegisterMedicament'),
);
const FormActionsMedicament = lazy(
	() => import('./components/FormActionMedicament'),
);

const MedicamentOptionsAdmin = ({ className }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<MedicamentStructure>>({
		url: '/medicament',
	});

	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: OrderMedicationProperty.name,
		});

	const { isOpen, handleOpen, handleClose } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<MedicamentStructure | null>(
		null,
	);

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
		if (handleData({ per: Permission.pharmacyRead })) {
			handleGetData();
		}
	}, [handleData, handleGetData]);

	return (
		<section className={`optionsPage ${className}`}>
			<Restricted per={Permission.pharmacyAdd}>
				<Modal isOpen={isOpen} handleClose={handleClose}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormRegisterMedicament
							closeModal={handleClose}
							handleGetData={handleGetData}
						/>
					</Suspense>
				</Modal>
			</Restricted>
			{(handleData({ per: Permission.pharmacyDelete }) ||
				handleData({ per: Permission.pharmacyUpdate })) && (
				<Modal isOpen={isOpenAction} handleClose={handleCloseAction}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormActionsMedicament
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderMedicationProperty.name}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={{ handleOpen, text: 'Registro de medicamento' }}
				permissions={{
					add: Permission.medicamentAdd,
					read: Permission.medicamentRead,
				}}
				selectOptions={{
					orderPropertyOptions: OrderMedicationProperty,
					textOrderProperty: textOrderMedicament,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.userRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: HeaderTableMedicament,
									text: textOrderMedicament,
								})}
								body={data.rows}
								actionUpdate={handleData({ per: Permission.medicamentUpdate })}
								actionDelete={handleData({ per: Permission.medicamentDelete })}
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

export default MedicamentOptionsAdmin;
