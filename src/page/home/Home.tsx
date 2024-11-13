import { Login } from '../../components/login/Login';
import { TitlePage } from '../../components/titlePage/TitlePage';
import './home.scss';

export const Home = () => {
	return (
		<TitlePage title='Inicio de sección'>
			<section className='home'>
				<Login to='options' className='home__login' />
			</section>
		</TitlePage>
	);
};
