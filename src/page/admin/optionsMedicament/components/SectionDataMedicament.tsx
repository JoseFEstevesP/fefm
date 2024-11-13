import React from 'react';
import { Btn } from '../../../../components/button/Btn';
import { MedicamentStructure } from '../medicamentTypeData';

const SectionDataMedicament = ({
	className,
	data,
	title,
	handleEdit,
}: {
	className?: string;
	title: string;
	data: MedicamentStructure | null;
	setData: React.Dispatch<React.SetStateAction<MedicamentStructure | null>>;
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
								{` ${data.description}`}
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
export default SectionDataMedicament;
