import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import Restricted from '../../../../components/restricted/Restricted';
import useDelete from '../../../../hooks/useDelete';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../optionsRol/enum/dataRol';
import { UserStructure } from '../UserTypeData';
import FormUpdateUser from './FormUpdateUser';
import SectionDataUserAdmin from './SectionDataUser';

const FormActionUser = ({
	data,
	handleGetData,
	handleCloseUpdate,
}: {
	data: UserStructure | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
}) => {
	const { handleData } = useValidate();

	const { handleDelete } = useDelete({
		url: '/user/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.userDelete })) {
			handleDelete({ uid: data?.uid });
		}
	}, [data?.uid, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});

	const [updateData, setUpdateData] = useState<UserStructure | null>(data);

	useEffect(() => {
		if (data) {
			setUpdateData(data);
		}
	}, [data]);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.userUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						<FormUpdateUser
							data={updateData}
							closeModal={handleClose}
							handleGetData={handleGetData}
							setData={setUpdateData}
						/>
					</Modal>
				</Restricted>
				<Restricted per={Permission.userDelete}>
					<Btn
						title='Boton eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>

				<SectionDataUserAdmin
					data={updateData}
					title='Datos de usuario'
					setData={setUpdateData}
					handleEdit={handleOpen}
				/>
			</section>
		</>
	);
};
export default FormActionUser;
