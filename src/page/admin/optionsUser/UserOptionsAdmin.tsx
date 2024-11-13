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
	HeaderTableUser,
	OrderUserProperty,
	textHeaderUser,
	textOrderUser,
} from './enum/enumUser';
import { UserStructure } from './UserTypeData';

const FormRegisterUser = lazy(() => import('./components/FormRegisterUser'));
const FormActionsUser = lazy(() => import('./components/FormActionUser'));

const UserOptionsAdmin = ({ className }) => {
	const { handleData } = useValidate();

	const { fetchData, data } = useHandleData<FindAllData<UserStructure>>({
		url: '/user',
	});

	const { filter, handlePagination, handleDataPagination, handleResetData } =
		useFilter({
			orderProperty: OrderUserProperty.ci,
		});

	const { isOpen, handleOpen, handleClose } = useModal({});
	const {
		isOpen: isOpenAction,
		handleOpen: handleOpenAction,
		handleClose: handleCloseAction,
	} = useModal({});

	const [updateData, setUpdateData] = useState<UserStructure | null>(null);

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
		if (handleData({ per: Permission.userRead })) {
			handleGetData();
		}
	}, [handleData, handleGetData]);

	return (
		<section className={`optionsPage ${className}`}>
			<Restricted per={Permission.userAdd}>
				<Modal isOpen={isOpen} handleClose={handleClose}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormRegisterUser
							closeModal={handleClose}
							handleGetData={handleGetData}
						/>
					</Suspense>
				</Modal>
			</Restricted>
			{(handleData({ per: Permission.userDelete }) ||
				handleData({ per: Permission.userUpdate })) && (
				<Modal isOpen={isOpenAction} handleClose={handleCloseAction}>
					<Suspense fallback={<div>Loading...</div>}>
						<FormActionsUser
							data={updateData}
							handleGetData={handleGetData}
							handleCloseUpdate={handleCloseAction}
						/>
					</Suspense>
				</Modal>
			)}
			<FilterData
				orderProperty={OrderUserProperty.ci}
				handleResetData={handleResetData}
				handleData={handleDataPagination}
				btn={{ handleOpen, text: 'Registro de usuario' }}
				permissions={{ add: Permission.userAdd, read: Permission.userRead }}
				selectOptions={{
					orderPropertyOptions: OrderUserProperty,
					textOrderProperty: textOrderUser,
				}}
				className='optionsPage__filter'
			/>
			<Restricted per={Permission.userRead}>
				<section className='optionsPage__table box'>
					{data ? (
						<>
							<Table
								head={transformEnum({
									transformEnum: HeaderTableUser,
									text: textHeaderUser,
								})}
								body={data.rows.map(item => ({
									...item,
									names: `${item.first_name} ${item.middle_name}`,
									surnames: `${item.first_surname} ${item.last_surname}`,
									rol: item.rol.name,
								}))}
								actionUpdate={handleData({ per: Permission.userUpdate })}
								actionDelete={handleData({ per: Permission.userDelete })}
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

export default UserOptionsAdmin;
