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
	HeaderTablePathology,
	OrderPathologyProperty,
	textOrderPathology,
} from './enum/enumPathology';
import { PathologyStructure } from './PathologyTypeData';

const FormRegisterPathology = lazy(
	() => import('./components/FormRegisterPathology'),
);
const FormActionsPathology = lazy(
	() => import('./components/FormActionPathology'),
);

const PathologyOptionsAdmin = ({ className }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<PathologyStructure>>({
		url: '/pathology',
	});

	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: OrderPathologyProperty.name,
		});

	const { isOpen, handleOpen, handleClose } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<PathologyStructure | null>(null);

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
		if (handleData({ per: Permission.pathologyRead })) {
			handleGetData();
		}
	}, [handleData, handleGetData]);

	return (
		<section className={`optionsPage ${className}`}>
			<Restricted per={Permission.pathologyAdd}>
				<Modal isOpen={isOpen} handleClose={handleClose}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormRegisterPathology
							closeModal={handleClose}
							handleGetData={handleGetData}
						/>
					</Suspense>
				</Modal>
			</Restricted>
			{(handleData({ per: Permission.pathologyDelete }) ||
				handleData({ per: Permission.pathologyUpdate })) && (
				<Modal isOpen={isOpenAction} handleClose={handleCloseAction}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormActionsPathology
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderPathologyProperty.name}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={{ handleOpen, text: 'Registro de patologia' }}
				permissions={{
					add: Permission.pathologyAdd,
					read: Permission.pathologyRead,
				}}
				selectOptions={{
					orderPropertyOptions: OrderPathologyProperty,
					textOrderProperty: textOrderPathology,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.pathologyRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: HeaderTablePathology,
									text: textOrderPathology,
								})}
								body={data.rows.map(item => ({
									...item,
									medicamentsFormater: item.medicaments
										.map(medicament => medicament.name)
										.join(', '),
								}))}
								actionUpdate={handleData({ per: Permission.pathologyUpdate })}
								actionDelete={handleData({ per: Permission.pathologyDelete })}
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

export default PathologyOptionsAdmin;
