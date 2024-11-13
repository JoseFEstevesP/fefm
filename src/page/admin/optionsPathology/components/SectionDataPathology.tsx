import React from 'react';
import { Btn } from '../../../../components/button/Btn';
import { PathologyStructure } from '../PathologyTypeData';

const SectionDataPathology = ({
	className,
	data,
	title,
	handleEdit,
}: {
	className?: string;
	title: string;
	data: PathologyStructure | null;
	setData: React.Dispatch<React.SetStateAction<PathologyStructure | null>>;
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
								<b>Descripción: </b>
								{` ${data.description}`}
							</li>
							<ul>
								<b>Medicamentos: </b>
								{data.medicaments.map((medicament, index) => (
									<li key={index}>{medicament.name}</li>
								))}
							</ul>
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
export default SectionDataPathology;
