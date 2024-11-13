import { useCallback, useContext } from 'react';
import { fetchAxios } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { ContextToken } from '../context/token/TokenContext';
import { ErrorType } from '../typeGlobal';

const useDelete = ({ url, handleGetData, handleCloseUpdate }) => {
	const { token } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);

	const handleDelete = useCallback(
		async ({ uid }: { uid: string | undefined }) => {
			try {
				const res = await fetchAxios.delete(`${url}${uid}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (res) {
					handleGetData();
					handleCloseUpdate();
				}
				setMsg(res.data.msg);
			} catch (err: any) {
				const errorResponse = err?.response?.data as ErrorType;
				const errorMessage =
					errorResponse.errors?.find(err => err.property === 'all')?.message ||
					null;
				setMsg(errorMessage);
			}
		},
		[url, token, setMsg, handleGetData, handleCloseUpdate],
	);
	return { handleDelete };
};
export default useDelete;
