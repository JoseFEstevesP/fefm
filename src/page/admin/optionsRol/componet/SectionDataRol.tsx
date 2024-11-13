import { Btn } from '../../../../components/button/Btn';
import { RolStructure } from '../sectionDataRolType';
import PermissionList from './PermissionList';

const SectionDataRol = ({
	className,
	data,
	title,
	handleEdit,
}: {
	className?: string;
	title: string;
	data: RolStructure | null;
	setData: React.Dispatch<React.SetStateAction<RolStructure | null>>;
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
								<b>Tipos de rol: </b>
								{` ${data.typeRol}`}
							</li>
							<li>
								<b>Permisos: </b>
								<PermissionList permissions={data?.permissions} />
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
export default SectionDataRol;
