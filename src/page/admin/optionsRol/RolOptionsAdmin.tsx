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
import {
	HeaderTableRol,
	OrderRolProperty,
	textOrderRol,
} from '../enum/enumRol';
import PermissionList from './componet/PermissionList';
import { Permission } from './enum/dataRol';
import { RolStructure } from './sectionDataRolType';

const FormRegisterRol = lazy(() => import('./componet/FormRegisterRol'));
const FormActionsRol = lazy(() => import('./componet/FormActionRol'));

const RolOptionsAdmin = ({ className }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<RolStructure>>({
		url: '/rol',
	});

	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: OrderRolProperty.name,
		});

	const { isOpen, handleOpen, handleClose } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<RolStructure | null>(null);

	const handleDataUpdate = useCallback(
		data => {
			setUpdateData({
				...data,
				permissions: data.permissions.props.permissions,
			});
			handleOpenAction();
		},
		[handleOpenAction],
	);

	const handleGetData = useCallback(() => {
		fetchData({ params: filter });
	}, [fetchData, filter]);

	useEffect(() => {
		if (handleData({ per: Permission.rolRead })) {
			handleGetData();
		}
	}, [handleData, handleGetData]);

	return (
		<section className={`optionsPage ${className}`}>
			<Restricted per={Permission.rolAdd}>
				<Modal isOpen={isOpen} handleClose={handleClose}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormRegisterRol
							closeModal={handleClose}
							handleGetData={handleGetData}
						/>
					</Suspense>
				</Modal>
			</Restricted>
			{(handleData({ per: Permission.rolDelete }) ||
				handleData({ per: Permission.rolUpdate })) && (
				<Modal isOpen={isOpenAction} handleClose={handleCloseAction}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormActionsRol
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderRolProperty.name}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={{ handleOpen, text: 'Registro de Rol' }}
				permissions={{ add: Permission.rolAdd, read: Permission.rolRead }}
				selectOptions={{
					orderPropertyOptions: OrderRolProperty,
					textOrderProperty: textOrderRol,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.userRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: HeaderTableRol,
								})}
								body={data.rows.map(item => ({
									...item,
									permissions: (
										<PermissionList permissions={item.permissions} />
									),
								}))}
								actionUpdate={handleData({ per: Permission.rolUpdate })}
								actionDelete={handleData({ per: Permission.rolDelete })}
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

export default RolOptionsAdmin;
