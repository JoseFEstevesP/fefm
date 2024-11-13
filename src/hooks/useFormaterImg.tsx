import { useCallback, useContext } from 'react';
import { fetchAxios } from '../constants/axios';
import { ContextToken } from '../context/token/TokenContext';

const useFormaterImg = () => {
	const { token } = useContext(ContextToken);

	const handleFormaterData = useCallback(
		async ({ url, setImg }) => {
			try {
				const res = await fetchAxios.get(`/image/${url}`, {
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: 'application/json',
					},
					responseType: 'blob',
				});

				const blob = new Blob([res.data], {
					type: res.headers['content-type'],
				});

				const imageObjectUrl = URL.createObjectURL(blob);

				setImg(imageObjectUrl);
			} catch (error) {
				console.error('Error al obtener la imagen:', error);
			}
		},
		[token],
	);

	return { handleFormaterData };
};

export default useFormaterImg;
