import { Card } from '../../../components/card/Card';
import Restricted from '../../../components/restricted/Restricted';
import { Permission } from '../../admin/optionsRol/enum/dataRol';
import './linksUserAdmin.scss';
import { LinksUserProps } from './linksUserAdminProps';

const LinksUserAdmin = ({ className }: LinksUserProps) => {
	return (
		<section className={`options ${className}`}>
			<Restricted per={Permission.user}>
				<Card
					btnName='registro'
					title='manejo de usuario'
					iconName='userData'
					to='/options/user'
				/>
			</Restricted>
			<Restricted per={Permission.rol}>
				<Card
					btnName='registro'
					title='manejo de roles'
					iconName='userData'
					to='/options/rol'
				/>
			</Restricted>
			<Restricted per={Permission.patients}>
				<Card
					btnName='registro'
					title='registro de paciente'
					iconName='userPatientData'
					to='/options/patient'
				/>
			</Restricted>
			<Restricted per={Permission.medicationRequest}>
				<Card
					btnName='registro'
					title='Solicitud de medicamento'
					iconName='userPatientData'
					to='/options/medication'
				/>
			</Restricted>
			<Restricted per={Permission.pharmacy}>
				<Card
					btnName='registro'
					title='Registro de Farmacia'
					iconName='userPatientData'
					to='/options/pharmacy'
				/>
			</Restricted>
			<Restricted per={Permission.medicament}>
				<Card
					btnName='registro'
					title='Registro de medicamento'
					iconName='userPatientData'
					to='/options/medicament'
				/>
			</Restricted>
			<Restricted per={Permission.pathology}>
				<Card
					btnName='registro'
					title='Registro de patologia'
					iconName='userPatientData'
					to='/options/pathology'
				/>
			</Restricted>
		</section>
	);
};
export default LinksUserAdmin;
