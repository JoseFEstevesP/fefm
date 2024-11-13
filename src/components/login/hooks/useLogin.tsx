import { useCallback, useContext, useState } from 'react';
import { ContextMsg } from '../../../context/msg/MsgContext';
import { ContextToken } from '../../../context/token/TokenContext';
import { LoginDTOSchemaType } from '../dto/login.dto';
import { fetchAxios } from '../../../constants/axios';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setToken } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);
	const handleSubmitLogin = useCallback(
		async (data: LoginDTOSchemaType) => {
			setLoading(true);
			try {
				const res = await fetchAxios.post('/user/login', data);
				setToken(res.data?.jwt);
				sessionStorage.setItem('jwt', res.data?.jwt);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setMsg(error?.response?.data?.errors[0].message);
			} finally {
				setLoading(false);
			}
		},
		[setMsg, setToken],
	);
	return { handleSubmitLogin, loading };
};
export default useLogin;
