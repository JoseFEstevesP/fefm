import { Card } from '../../../components/card/Card';
import Restricted from '../../../components/restricted/Restricted';
import { Permission } from '../../admin/optionsRol/enum/dataRol';
import './linksUserDefault.scss';
import { LinksUserDefaultProps } from './linksUserDefaultProps';

const LinksUserDefault = ({ className }: LinksUserDefaultProps) => {
	return (
		<section className={`options ${className}`}>
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
					btnName='crear'
					title='solicitud de medicamento'
					iconName='medicationRequest'
					to='/options/medication'
				/>
			</Restricted>
		</section>
	);
};
export default LinksUserDefault;
