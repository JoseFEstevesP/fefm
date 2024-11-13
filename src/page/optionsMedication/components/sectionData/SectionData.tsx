import React, { useEffect, useState } from 'react';
import { Btn } from '../../../../components/button/Btn';
import Modal from '../../../../components/modal/Modal';
import useFormaterImg from '../../../../hooks/useFormaterImg';
import useModalImg from '../../../../hooks/useModalImg';
import './infoSection.scss';

const SectionData = ({
	className,
	data,
	title,
	handleEdit,
}: {
	className?: string;
	title: string;
	data: any;
	setData: React.Dispatch<React.SetStateAction<any>>;
	handleEdit: () => void;
}) => {
	const { handleFormaterData } = useFormaterImg();
	const [photoRecipe, setPhotoRecipe] = useState<string | null>(null);
	const [photoMedicalReport, setPhotoMedicalReport] = useState<string | null>(
		null,
	);
	useEffect(() => {
		if (data) {
			handleFormaterData({
				url: `${data?.photo_recipe}`,
				setImg: setPhotoRecipe,
			});
			handleFormaterData({
				url: `${data?.photo_medical_report}`,
				setImg: setPhotoMedicalReport,
			});
		}
	}, [data, data?.photo_recipe, handleFormaterData]);
	const { handleClose, handleImageModal, isOpen, urlModal } = useModalImg();
	return (
		<>
			{urlModal && (
				<Modal handleClose={handleClose} isOpen={isOpen}>
					<img src={urlModal} alt='' />
				</Modal>
			)}
			<section className={`infoSection ${className}`}>
				<h3 className='infoSection__title'>{title}</h3>
				<ul className='infoSection__text'>
					{data && (
						<>
							<h3>Datos del usuario</h3>
							<li>
								<b>Cédula: </b>
								{` ${data.v_e} - ${data.ci}`}
							</li>
							<li>
								<b>Fecha del informe Medico: </b>
								{` ${data.date_of_medical_report}`}
							</li>
							<li>
								<b>Lugar del paciente: </b>
								{` ${data.state} ${data.municipality}`}
							</li>
							<li>
								<b>Patologia: </b>
								{` ${data.pathology_name}`}
							</li>
							<h3>Datos de la petición</h3>
							<li>
								<b>Código: </b>
								{` ${data.code}`}
							</li>
							<li>
								<b>Medicamento: </b>
								{` ${data.medicament_name}`}
							</li>
							<li>
								<b>Cantidad: </b>
								{` ${data.quantity}`}
							</li>
							<li>
								<b>Estatus de la petición: </b>
								{` ${data.delivery_status}`}
							</li>
							{data.pharmacy && (
								<li>
									<b>Farmacia asignada: </b>
									<br />
									<b>Nombre: </b>
									{` ${data.pharmacy.name}`}
									<br />
									<b>Dirección: </b>
									{` ${data.pharmacy.state}, ${data.pharmacy.municipality}, ${data.pharmacy.address}`}
								</li>
							)}
							{data.msg && (
								<li>
									<b>Mensaje de los administradores: </b>
									{` ${data.msg}`}
								</li>
							)}
							<li className='infoSection__contentImg'>
								{photoRecipe && (
									<img
										className='infoSection__img'
										onClick={handleImageModal}
										src={photoRecipe}
										alt={data.photo_recipe}
									/>
								)}
								{photoMedicalReport && (
									<img
										className='infoSection__img'
										onClick={handleImageModal}
										src={photoMedicalReport}
										alt={data.photo_medical_report}
									/>
								)}
							</li>
						</>
					)}
				</ul>
				<Btn
					title='Boton de editar el campo'
					nameIcon='edit'
					CN={{ className: 'btn--section  infoSection__edit' }}
					handleClick={handleEdit}
				/>
			</section>
		</>
	);
};
export default SectionData;
