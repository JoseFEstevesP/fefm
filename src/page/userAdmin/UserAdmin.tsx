import { Route, Routes } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';
import { TitlePage } from '../../components/titlePage/TitlePage';
import MedicamentOptionsAdmin from '../admin/optionsMedicament/MedicamentOptionsAdmin';
import PathologyOptionsAdmin from '../admin/optionsPathology/PathologyOptionsAdmin';
import PharmacyOptionsAdmin from '../admin/optionsPharmacy/PharmacyOptionsAdmin';
import RolOptionsAdmin from '../admin/optionsRol/RolOptionsAdmin';
import UserOptionsAdmin from '../admin/optionsUser/UserOptionsAdmin';
import OptionsMedication from '../optionsMedication/OptionsMedication';
import OptionsPatient from '../optionsPatient/OptionsPatient';
import LinksUserAdmin from './linksUserAdmin/LinksUserAdmin';
import './userAdmin.scss';

const UserAdmin = () => {
	return (
		<TitlePage title='administrador'>
			<section className='userAdmin'>
				<Menu
					className='userAdmin__menu'
					data={[
						{ text: 'inicio', to: '/options' },
						{ text: 'Usuarios', to: '/options/user' },
						{ text: 'Roles', to: '/options/rol' },
						{ text: 'paciente', to: '/options/patient' },
						{ text: 'Solicitud de medicamento', to: '/options/medication' },
						{ text: 'Farmacia', to: '/options/pharmacy' },
						{ text: 'Medicamento', to: '/options/medicament' },
						{ text: 'Patologia', to: '/options/pathology' },
					]}
				/>
				<Routes>
					<Route
						path='/'
						element={<LinksUserAdmin className='userAdmin__options' />}
					/>
					<Route
						path='/user'
						element={<UserOptionsAdmin className='userAdmin__options' />}
					/>
					<Route
						path='/rol'
						element={<RolOptionsAdmin className='userAdmin__options' />}
					/>
					<Route
						path='/patient'
						element={
							<OptionsPatient className='optionsUser__options' admin={true} />
						}
					/>
					<Route
						path='/medication'
						element={
							<OptionsMedication
								className='optionsUser__options'
								admin={true}
							/>
						}
					/>
					<Route
						path='/pharmacy'
						element={<PharmacyOptionsAdmin className='optionsUser__options' />}
					/>
					<Route
						path='/medicament'
						element={
							<MedicamentOptionsAdmin className='optionsUser__options' />
						}
					/>
					<Route
						path='/pathology'
						element={<PathologyOptionsAdmin className='optionsUser__options' />}
					/>
				</Routes>
			</section>
		</TitlePage>
	);
};

export default UserAdmin;
