import { useCallback, useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextRol } from '../../context/rol/RolContext';
import { RolStricture } from '../../context/rol/rol';
import { ContextToken } from '../../context/token/TokenContext';
import useGet from '../../hooks/useGet';

const ProtectedRoutes = () => {
	const { token } = useContext(ContextToken);
	const { setRol } = useContext(ContextRol);
	const { getData } = useGet();

	const handleData = useCallback(async () => {
		const res: RolStricture = await getData({ url: '/rol/per' });
		setRol(res);
	}, [getData, setRol]);

	useEffect(() => {
		if (token) {
			handleData();
		}
	}, [handleData, token]);

	return token ? <Outlet /> : <Navigate to='/' />;
};
export default ProtectedRoutes;
