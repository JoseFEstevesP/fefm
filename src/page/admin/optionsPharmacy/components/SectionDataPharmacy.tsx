import React from 'react';
import { Btn } from '../../../../components/button/Btn';
import { PharmacyStructure } from '../PharmacyTypeData';

const SectionDataPharmacy = ({
	className,
	data,
	title,
	handleEdit,
}: {
	className?: string;
	title: string;
	data: PharmacyStructure | null;
	setData: React.Dispatch<React.SetStateAction<PharmacyStructure | null>>;
	handleEdit: () => void;
}) => {
	return (
		<>
			<section className={`infoSection ${className}`}>
				<h3 className='infoSection__title'>{title}</h3>
				<ul className='infoSection__text'>
					{data && (
						<>
							<li>
								<b>Nombre: </b>
								{` ${data.name}`}
							</li>
							<li>
								<b>DIrección: </b>
								{` ${data.address}`}
							</li>
							<li>
								<b>Estado: </b>
								{` ${data.state}`}
							</li>
							<li>
								<b>Municipio: </b>
								{` ${data.municipality}`}
							</li>
						</>
					)}
				</ul>
				<Btn
					title='Boton de editar'
					nameIcon='edit'
					CN={{ className: 'btn--section  infoSection__edit' }}
					handleClick={handleEdit}
				/>
			</section>
		</>
	);
};
export default SectionDataPharmacy;
