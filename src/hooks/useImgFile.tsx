import { useCallback, useContext } from 'react';
import { fetchAxios } from '../constants/axios';
import { ContextToken } from '../context/token/TokenContext';

const useImgFile = () => {
	const { token } = useContext(ContextToken);

	const handleData = useCallback(
		async ({ photo, ci, nameFile }) => {
			const formData = new FormData();
			const photoFile = photo[0];
			formData.append('file', photoFile);
			formData.append('ci', ci);
			formData.append('nameFile', nameFile);
			const res = await fetchAxios.post('/image', formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return res;
		},
		[token],
	);
	return { handleData };
};
export default useImgFile;
