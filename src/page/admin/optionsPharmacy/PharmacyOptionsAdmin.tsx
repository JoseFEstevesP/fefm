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
	HeaderTablePharmacy,
	OrderPharmacyProperty,
	textOrderPharmacy,
} from './enum/enumPharmacy';
import { PharmacyStructure } from './PharmacyTypeData';

const FormRegisterPharmacy = lazy(
	() => import('./components/FormRegisterPharmacy'),
);
const FormActionsPharmacy = lazy(
	() => import('./components/FormActionPharmacy'),
);

const PharmacyOptionsAdmin = ({ className }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<PharmacyStructure>>({
		url: '/pharmacy',
	});

	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: OrderPharmacyProperty.name,
		});

	const { isOpen, handleOpen, handleClose } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<PharmacyStructure | null>(null);

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
						<FormRegisterPharmacy
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
						<FormActionsPharmacy
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderPharmacyProperty.name}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={{ handleOpen, text: 'Registro de Farmacia' }}
				permissions={{
					add: Permission.pharmacyAdd,
					read: Permission.pharmacyRead,
				}}
				selectOptions={{
					orderPropertyOptions: OrderPharmacyProperty,
					textOrderProperty: textOrderPharmacy,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.pharmacyRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: HeaderTablePharmacy,
									text: textOrderPharmacy,
								})}
								body={data.rows}
								actionUpdate={handleData({ per: Permission.pharmacyUpdate })}
								actionDelete={handleData({ per: Permission.pharmacyDelete })}
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

export default PharmacyOptionsAdmin;
