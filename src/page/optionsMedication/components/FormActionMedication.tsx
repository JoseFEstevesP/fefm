import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../components/button/Btn';
import useModal from '../../../components/modal/hooks/useModal';
import Modal from '../../../components/modal/Modal';
import Restricted from '../../../components/restricted/Restricted';
import useDelete from '../../../hooks/useDelete';
import useValidate from '../../../hooks/useValidate';
import { Permission } from '../../admin/optionsRol/enum/dataRol';
import { MedicationRequest } from '../optionsMedicationProps';
import FormUpdateMedicationRequest from './FormUpdateMedication';
import FormUpdateMedicationRequestAdmin from './FormUpdateMedicationAdmin';
import SectionData from './sectionData/SectionData';

const FormActionMedication = ({
	data,
	handleGetData,
	handleCloseUpdate,
	admin,
}: {
	data: MedicationRequest | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
	admin?: boolean;
}) => {
	const { handleData } = useValidate();
	const { handleDelete } = useDelete({
		url: admin ? '/medication/delete/admin/' : '/medication/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.medicationRequestDelete })) {
			handleDelete({ uid: data?.uid });
		}
	}, [data?.uid, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});
	const [updateData, setUpdateData] = useState<MedicationRequest | null>(null);

	useEffect(() => {
		if (data) {
			setUpdateData(data);
		}
	}, [data]);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.medicationRequestUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						{admin ? (
							<FormUpdateMedicationRequestAdmin
								data={updateData}
								closeModal={handleClose}
								closeModalAction={handleCloseUpdate}
								handleGetData={handleGetData}
								setData={setUpdateData}
							/>
						) : (
							<FormUpdateMedicationRequest
								data={updateData}
								closeModal={handleClose}
								handleGetData={handleGetData}
								setData={setUpdateData}
							/>
						)}
					</Modal>
				</Restricted>
				<Restricted per={Permission.medicationRequestDelete}>
					<Btn
						title='Botón eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>

				<SectionData
					data={updateData}
					title='Solicitud de medicamento'
					handleEdit={handleOpen}
					setData={setUpdateData}
				/>
			</section>
		</>
	);
};

export default FormActionMedication;
