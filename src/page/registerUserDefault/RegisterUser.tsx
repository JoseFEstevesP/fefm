import { TitlePage } from '../../components/titlePage/TitlePage';
import FormRegisterUser from '../admin/optionsUser/components/FormRegisterUser';
import './registerUser.scss';

export const RegisterUser = () => {
	return (
		<TitlePage title='registro de usuario'>
			<section className='registerUser'>
				<FormRegisterUser />
			</section>
		</TitlePage>
	);
};
