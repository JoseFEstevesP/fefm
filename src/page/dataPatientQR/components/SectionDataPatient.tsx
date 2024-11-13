import { PatientData } from '../../optionsPatient/components/formActionPatient/formActionPatientType';

const SectionDataPatient = ({
	className,
	data,
}: {
	className?: string;
	data: PatientData;
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
			</section>
		</>
	);
};
export default SectionDataPatient;
