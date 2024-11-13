import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import Restricted from '../../../../components/restricted/Restricted';
import useDelete from '../../../../hooks/useDelete';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../optionsRol/enum/dataRol';
import { MedicamentStructure } from '../medicamentTypeData';
import FormUpdateMedicament from './FormUpdateMedicament';
import SectionDataMedicament from './SectionDataMedicament';

const FormActionMedicament = ({
	data,
	handleGetData,
	handleCloseUpdate,
}: {
	data: MedicamentStructure | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
}) => {
	const { handleData } = useValidate();

	const { handleDelete } = useDelete({
		url: '/medicament/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.medicamentDelete })) {
			handleDelete({ uid: data?.uid });
		}
	}, [data?.uid, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});

	const [updateData, setUpdateData] = useState<MedicamentStructure | null>(
		data,
	);

	useEffect(() => {
		if (data) {
			setUpdateData(data);
		}
	}, [data]);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.medicamentUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						<FormUpdateMedicament
							data={updateData}
							closeModal={handleClose}
							handleGetData={handleGetData}
							setData={setUpdateData}
						/>
					</Modal>
				</Restricted>
				<Restricted per={Permission.medicamentDelete}>
					<Btn
						title='Boton eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>

				<SectionDataMedicament
					data={updateData}
					title='Datos del medicamento'
					setData={setUpdateData}
					handleEdit={handleOpen}
				/>
			</section>
		</>
	);
};
export default FormActionMedicament;
