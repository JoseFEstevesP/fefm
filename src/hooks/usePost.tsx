import { useCallback, useState } from 'react';
import { fetchAxios } from '../constants/axios';

const usePost = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const handlePost = useCallback(
		async ({
			data,
			token,
			url,
		}: {
			data: { [key: string]: string };
			token?: string;
			url: string;
		}) => {
			setLoading(true);
			try {
				const headers: Record<string, string> = token
					? { Authorization: `Bearer ${token}` }
					: {};

				const response = await fetchAxios.post(url, data, { headers });

				if (!response || !response.data) {
					throw new Error('No se recibió una respuesta válida');
				}

				return response.data;
			} catch (error: any) {
				console.error('Error en la petición POST:', error);
				throw new Error(error.message || 'Error en la petición POST');
			} finally {
				setLoading(false);
			}
		},
		[],
	);

	return { loading, handlePost };
};

export default usePost;
