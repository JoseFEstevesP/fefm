import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import Restricted from '../../../../components/restricted/Restricted';
import useDelete from '../../../../hooks/useDelete';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../optionsRol/enum/dataRol';
import { PharmacyStructure } from '../PharmacyTypeData';
import FormUpdatePharmacy from './FormUpdatePharmacy';
import SectionDataPharmacy from './SectionDataPharmacy';

const FormActionPharmacy = ({
	data,
	handleGetData,
	handleCloseUpdate,
}: {
	data: PharmacyStructure | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
}) => {
	const { handleData } = useValidate();

	const { handleDelete } = useDelete({
		url: '/pharmacy/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.pharmacyDelete })) {
			handleDelete({ uid: data?.uid });
		}
	}, [data?.uid, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});

	const [updateData, setUpdateData] = useState<PharmacyStructure | null>(data);

	useEffect(() => {
		if (data) {
			setUpdateData(data);
		}
	}, [data]);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.pharmacyUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						<FormUpdatePharmacy
							data={updateData}
							closeModal={handleClose}
							handleGetData={handleGetData}
							setData={setUpdateData}
						/>
					</Modal>
				</Restricted>
				<Restricted per={Permission.pharmacyDelete}>
					<Btn
						title='Boton eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>

				<SectionDataPharmacy
					data={updateData}
					title='Datos de Farmacia'
					setData={setUpdateData}
					handleEdit={handleOpen}
				/>
			</section>
		</>
	);
};
export default FormActionPharmacy;
