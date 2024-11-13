import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import Restricted from '../../../../components/restricted/Restricted';
import useDelete from '../../../../hooks/useDelete';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../enum/dataRol';
import FormUpdateRol from './FormUpdateRol';
import SectionDataRol from './SectionDataRol';
import { RolStructure } from '../sectionDataRolType';

const FormActionRol = ({
	data,
	handleGetData,
	handleCloseUpdate,
}: {
	data: RolStructure | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
}) => {
	const { handleData } = useValidate();

	const { handleDelete } = useDelete({
		url: '/rol/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.rolDelete })) {
			handleDelete({ uid: data?.uid });
		}
	}, [data?.uid, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});

	const [updateData, setUpdateData] = useState<any | null>(data);

	useEffect(() => {
		if (data) {
			setUpdateData(data);
		}
	}, [data]);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.rolUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						<FormUpdateRol
							data={updateData}
							closeModal={handleClose}
							handleGetData={handleGetData}
							setData={setUpdateData}
						/>
					</Modal>
				</Restricted>
				<Restricted per={Permission.rolDelete}>
					<Btn
						title='Boton eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>

				<SectionDataRol
					data={updateData}
					title='Datos de rol'
					setData={setUpdateData}
					handleEdit={handleOpen}
				/>
			</section>
		</>
	);
};
export default FormActionRol;
