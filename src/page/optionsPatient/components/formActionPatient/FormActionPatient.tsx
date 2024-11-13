import { useCallback, useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { Btn } from '../../../../components/button/Btn';
import Modal from '../../../../components/modal/Modal';
import useModal from '../../../../components/modal/hooks/useModal';
import Restricted from '../../../../components/restricted/Restricted';
import useDelete from '../../../../hooks/useDelete';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../../admin/optionsRol/enum/dataRol';
import {
	patientDataAuthorized,
	patientDataEconomic,
	patientDataFamily,
	patientDataHousing,
	patientDataHousingEx,
	patientDataMedical,
	patientDataUser,
} from '../../functions/formaterData';
import { DataPatient } from '../../optionsPatientProps';
import FormUpdatePatient from '../formUpdatePatient/FormUpdatePatient';
import SectionData from '../sectionData/SectionData';
import './formActionPatient.scss';

const FormActionPatient = ({
	data,
	handleGetData,
	handleCloseUpdate,
	admin = false,
}: {
	data: DataPatient | null;
	handleGetData: () => void;
	handleCloseUpdate: () => void;
	admin?: boolean;
}) => {
	const { handleData } = useValidate();

	const { handleDelete } = useDelete({
		url: admin ? '/patients/delete/admin/' : '/patients/delete/',
		handleGetData,
		handleCloseUpdate,
	});

	const handleDataDelete = useCallback(() => {
		if (handleData({ per: Permission.patientsDelete })) {
			handleDelete({ uid: data?.uidPatient });
		}
	}, [data?.uidPatient, handleData, handleDelete]);

	const { isOpen, handleOpen, handleClose } = useModal({});

	const [actionData, setActionData] = useState<any | null>(null);
	const [updateData, setUpdateData] = useState<DataPatient | null>(null);
	const [updateSection, setUpdateSection] = useState('');

	const handleDataUpdate = useCallback(
		({ section }: { section: string }) => {
			setUpdateSection(section);
			setUpdateData(data && data[section]);
			handleOpen();
		},
		[actionData, handleOpen],
	);

	useEffect(() => {
		if (data) {
			setActionData(data);
		}
	}, [data]);

	const handleNewData = useCallback(
		(newData: any) => {
			if (actionData && updateSection) {
				const updatedActionData = { ...actionData };
				updatedActionData[updateSection] = newData;
				setActionData(updatedActionData);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[updateSection],
	);

	return (
		<>
			<section className='infoPatient'>
				<Restricted per={Permission.patientsUpdate}>
					<Modal
						isOpen={isOpen}
						handleClose={handleClose}
						className='infoPatient__modal'
					>
						<FormUpdatePatient
							data={updateData}
							keyData={updateSection}
							modalClose={handleClose}
							handleNewData={handleNewData}
							handleGetData={handleGetData}
						/>
					</Modal>
				</Restricted>
				<Restricted per={Permission.patientsDelete}>
					<Btn
						title='Boton eliminar'
						nameIcon='delete'
						CN={{
							className: 'infoPatient__delete btn--section',
						}}
						handleClick={handleDataDelete}
					/>
				</Restricted>
				<QRCode
					value={`${window.location.origin}/data/${actionData?.patientDataUser.ci}`}
				/>
				<SectionData
					data={patientDataUser(actionData)}
					handleEdit={handleDataUpdate}
				/>
				<SectionData
					data={patientDataMedical(actionData)}
					handleEdit={handleDataUpdate}
				/>
				<SectionData
					data={patientDataHousing(actionData)}
					handleEdit={handleDataUpdate}
				/>
				<SectionData
					data={patientDataHousingEx(actionData)}
					handleEdit={handleDataUpdate}
				/>
				<SectionData
					data={patientDataEconomic(actionData)}
					handleEdit={handleDataUpdate}
				/>
				<SectionData
					data={patientDataFamily(actionData)}
					handleEdit={handleDataUpdate}
				/>
				<SectionData
					data={patientDataAuthorized(actionData)}
					handleEdit={handleDataUpdate}
				/>
			</section>
		</>
	);
};
export default FormActionPatient;
