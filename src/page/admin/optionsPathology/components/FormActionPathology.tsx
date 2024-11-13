import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import Restricted from '../../../../components/restricted/Restricted';
import useDelete from '../../../../hooks/useDelete';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../optionsRol/enum/dataRol';
import { PathologyStructure } from '../PathologyTypeData';
import FormUpdatePathology from './FormUpdatePathology';
import SectionDataPathology from './SectionDataPathology';

const FormActionPathology = ({
	data,
	handleGetData,
	handleCloseUpdate,
}: {
	data: PathologyStructure | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
}) => {
	const { handleData } = useValidate();

	const { handleDelete } = useDelete({
		url: '/pathology/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.pathologyDelete })) {
			handleDelete({ uid: data?.uid });
		}
	}, [data?.uid, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});

	const [updateData, setUpdateData] = useState<PathologyStructure | null>(data);

	useEffect(() => {
		if (data) {
			setUpdateData(data);
		}
	}, [data]);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.pathologyUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						<FormUpdatePathology
							data={updateData}
							closeModal={handleClose}
							handleGetData={handleGetData}
							setData={setUpdateData}
						/>
					</Modal>
				</Restricted>
				<Restricted per={Permission.pathologyDelete}>
					<Btn
						title='Boton eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>

				<SectionDataPathology
					data={updateData}
					title='Datos de Farmacia'
					setData={setUpdateData}
					handleEdit={handleOpen}
				/>
			</section>
		</>
	);
};
export default FormActionPathology;
