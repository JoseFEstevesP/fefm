import React from 'react';
import { Btn } from '../../../../components/button/Btn';
import { UserStructure } from '../UserTypeData';

const SectionDataUserAdmin = ({
	className,
	data,
	title,
	handleEdit,
}: {
	className?: string;
	title: string;
	data: UserStructure | null;
	setData: React.Dispatch<React.SetStateAction<UserStructure | null>>;
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
								<b>Cédula: </b>
								{` ${data.v_e} - ${data.ci}`}
							</li>
							<li>
								<b>Nombre: </b>
								{` ${data.first_name} ${data.middle_name}`}
							</li>
							<li>
								<b>Apellido: </b>
								{` ${data.first_surname} ${data.last_surname}`}
							</li>
							<li>
								<b>Sexo: </b>
								{` ${data.sex}`}
							</li>
							<li>
								<b>Email: </b>
								{` ${data.email}`}
							</li>
							<li>
								<b>Teléfono: </b>
								{` ${data.phone}`}
							</li>
							<li>
								<b>Rol: </b>
								{` ${data.rol}`}
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
export default SectionDataUserAdmin;
