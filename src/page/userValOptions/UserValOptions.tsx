import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Restricted from '../../components/restricted/Restricted';
import { ContextProfile } from '../../context/profile/ProfileContext';
import { ContextToken } from '../../context/token/TokenContext';
import useGet from '../../hooks/useGet';
import UserAdmin from '../userAdmin/UserAdmin';
import UserDefault from '../userDefault/UserDefault';

const UserValOptions = () => {
	const { getData } = useGet();
	const { setProfile } = useContext(ContextProfile);
	const { setToken } = useContext(ContextToken);
	const navigate = useNavigate();

	const handleProfileData = useCallback(async () => {
		try {
			const data = await getData({ url: '/user/profile' });
			setProfile(data);
		} catch (error) {
			console.error(
				'Error al optener los daltos del perfil de usuario:',
				error,
			);
			setToken(null);
			sessionStorage.removeItem('jwt');
			navigate('/');
		}
	}, [getData, setProfile]);

	useEffect(() => {
		handleProfileData();
	}, [getData, handleProfileData, setProfile]);

	return (
		<>
			<Restricted typeRol={'user'}>
				<UserDefault />
			</Restricted>
			<Restricted typeRol={'admin'}>
				<UserAdmin />
			</Restricted>
		</>
	);
};

export default UserValOptions;
