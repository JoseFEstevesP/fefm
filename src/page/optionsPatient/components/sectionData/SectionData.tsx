import { Btn } from '../../../../components/button/Btn';
import Restricted from '../../../../components/restricted/Restricted';
import { Permission } from '../../../admin/optionsRol/enum/dataRol';
import { PatientData } from '../formActionPatient/formActionPatientType';
import './infoSection.scss';
const SectionData = ({
	className,
	data,
	handleEdit,
}: {
	className?: string;
	data: PatientData;
	handleEdit: ({ section }) => void;
}) => {
	return (
		<>
			<section className={`infoSection ${className}`}>
				<h3 className='infoSection__title'>{data.title}</h3>
				<ul className='infoSection__text'>
					{data &&
						Object.keys(data?.dataLabel).map(item => (
							<li key={crypto.randomUUID()}>
								<b>{data?.dataLabel[item].label}:</b>
								{data?.dataLabel[item].value}
							</li>
						))}
				</ul>
				<Restricted per={Permission.patientsUpdate}>
					<Btn
						title='Boton de editar el campo'
						nameIcon='edit'
						CN={{ className: 'btn--section  infoSection__edit' }}
						handleClick={() => handleEdit({ section: data.section })}
					/>
				</Restricted>
			</section>
		</>
	);
};
export default SectionData;
