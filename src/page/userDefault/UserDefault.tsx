import { Route, Routes } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';
import { TitlePage } from '../../components/titlePage/TitlePage';
import OptionsMedication from '../optionsMedication/OptionsMedication';
import OptionsPatient from '../optionsPatient/OptionsPatient';
import LinksUserDefault from './linksUserDefault/LinksUserDefault';
import './optionsUser.scss';

const UserDefault = () => {
	return (
		<TitlePage title='Usuarios'>
			<section className='optionsUser'>
				<Menu
					className='optionsUser__menu'
					data={[
						{ text: 'inicio', to: '/options' },
						{ text: 'paciente', to: '/options/patient' },
						{ text: 'solicitud de medicamento', to: '/options/medication' },
					]}
				/>
				<Routes>
					<Route
						path='/'
						element={<LinksUserDefault className='optionsUser__options' />}
					/>
					<Route
						path='/patient'
						element={
							<OptionsPatient className='optionsUser__options' admin={false} />
						}
					/>
					<Route
						path='/medication'
						element={
							<OptionsMedication
								className='optionsUser__options'
								admin={false}
							/>
						}
					/>
				</Routes>
			</section>
		</TitlePage>
	);
};

export default UserDefault;
