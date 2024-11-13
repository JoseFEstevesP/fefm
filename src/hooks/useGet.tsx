import { useCallback, useContext, useState } from 'react';
import { fetchAxios } from '../constants/axios';
import { ContextToken } from '../context/token/TokenContext';
import { ErrorType, ParamsData } from '../typeGlobal';

const useGet = () => {
	const [error, setError] = useState<ErrorType | null>(null);
	const [loading, setLoading] = useState(false);
	const { token } = useContext(ContextToken);

	const getData = useCallback(
		async ({ url, params }: { url: string; params?: ParamsData }) => {
			setError(null);
			setLoading(true);
			try {
				const res = await fetchAxios.get(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params,
				});
				return res.data;
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setError(error?.response?.data);
			} finally {
				setLoading(false);
			}
		},
		[token],
	);
	return { getData, error, loading };
};
export default useGet;
