import { useEffect, useState } from 'react';
import Modal from '../../../components/modal/Modal';
import useModalImg from '../../../hooks/useModalImg';
import { SectionDataMRProps } from '../dataPatientQRProps';
import useFormaterImg from '../../../hooks/useFormaterImg';

const SectionDataMR: React.FC<SectionDataMRProps> = ({
	className = '',
	data,
}) => {
	const { handleFormaterData } = useFormaterImg();
	const [photoRecipe, setPhotoRecipe] = useState<string | null>(null);
	const [photoMedicalReport, setPhotoMedicalReport] = useState<string | null>(
		null,
	);
	useEffect(() => {
		if (data) {
			console.log('useEffect -> data:', data);
			handleFormaterData({
				url: `${data?.dataLabel.photo_recipe.value}`,
				setImg: setPhotoRecipe,
			});
			handleFormaterData({
				url: `${data?.dataLabel.photo_medical_report.value}`,
				setImg: setPhotoMedicalReport,
			});
		}
	}, [data, data?.photo_recipe, handleFormaterData]);
	const { handleClose, handleImageModal, isOpen, urlModal } = useModalImg();
	return (
		<section className={`infoSection ${className}`}>
			{urlModal && (
				<Modal handleClose={handleClose} isOpen={isOpen}>
					<img src={urlModal} alt='' />
				</Modal>
			)}
			<h3 className='infoSection__title'>{data.title}</h3>
			<ul className='infoSection__text'>
				<li>
					<b>{data.dataLabel.code.label}:</b>
					{data.dataLabel.code.value}
				</li>
				{data.dataLabel.msg && (
					<li>
						<b>{data.dataLabel.msg.label}:</b>
						{data.dataLabel.msg.value}
					</li>
				)}
				<li>
					<b>{data.dataLabel.date_of_medical_report.label}:</b>
					{data.dataLabel.date_of_medical_report.value}
				</li>
				<li>
					<b>{data.dataLabel.delivery_status.label}:</b>
					{data.dataLabel.delivery_status.value}
				</li>
				<li>
					<b>{data.dataLabel.updatedAt.label}:</b>
					{data.dataLabel.updatedAt.value}
				</li>
				<li>
					<b>{data.dataLabel.deliveryNumber.label}:</b>
					{data.dataLabel.deliveryNumber.value}
				</li>
				<li>
					<b>{data.dataLabel.photo_recipe.label}:</b>
					{photoRecipe && (
						<img
							className='infoSection__img'
							onClick={handleImageModal}
							src={photoRecipe}
							alt={data.photo_recipe}
						/>
					)}
				</li>
				<li>
					<b>{data.dataLabel.photo_medical_report.label}:</b>
					{photoMedicalReport && (
						<img
							className='infoSection__img'
							onClick={handleImageModal}
							src={photoMedicalReport}
							alt={data.photo_medical_report}
						/>
					)}
				</li>
				<li>
					<b>{data.dataLabel.deliveryData.title}</b>
					{data.dataLabel.deliveryData.data.map((item, index) => (
						<details key={crypto.randomUUID()}>
							<summary>
								<b>{item.createdAt.value}</b>
							</summary>
							<ul key={index}>
								<li>
									<b>{item.quantity.label}:</b>
									{item.quantity.value}
								</li>
								<li>
									<b>{item.pharmacyName.label}:</b>
									{item.pharmacyName.value}
								</li>
								<li>
									<b>{item.pharmacyAddress.label}:</b>
									{item.pharmacyAddress.value}
								</li>
								<li>
									<b>{item.medicament.label}:</b>
									{item.medicament.value}
								</li>
							</ul>
						</details>
					))}
				</li>
			</ul>
		</section>
	);
};

export default SectionDataMR;
