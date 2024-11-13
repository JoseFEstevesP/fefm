import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TitlePage } from '../../components/titlePage/TitlePage';
import usePost from '../../hooks/usePost';
import { system } from '../../systemText';
import CodeForm from './CodeForm';
import EmailForm from './EmailForm';
import PasswordForm from './NewPasswordForm';

const RecoveryPassword = () => {
	const [email, setEmail] = useState<string | null>(null);
	const { loading, handlePost } = usePost();
	const [token, setToken] = useState<string | null>(null);

	const [vewForm, setVewForm] = useState({
		email: true,
		code: false,
		password: false,
	});

	return (
		<TitlePage title='Recuperar contraseña'>
			<section className='recovery'>
				<section className='recoveryForm'>
					<h2 className='recoveryForm__title'>
						{loading ? 'Cargando...' : 'Recuperar contraseña'}
					</h2>
					{vewForm.email && (
						<EmailForm
							setEmail={setEmail}
							setVewForm={setVewForm}
							handlePost={handlePost}
						/>
					)}
					{vewForm.code && email && (
						<CodeForm
							email={email}
							handlePost={handlePost}
							setToken={setToken}
							setVewForm={setVewForm}
						/>
					)}
					{vewForm.password && token && (
						<PasswordForm
							handlePost={handlePost}
							setVewForm={setVewForm}
							token={token}
						/>
					)}
					<Link to='/'>
						<span>{system.login}</span>
					</Link>
				</section>
			</section>
		</TitlePage>
	);
};
export default RecoveryPassword;
