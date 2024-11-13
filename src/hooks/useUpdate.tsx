import { useCallback, useContext, useState } from 'react';
import { fetchAxios } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { ContextToken } from '../context/token/TokenContext';
import { ErrorType } from '../typeGlobal';

const useUpdate = ({ fetchData }) => {
	const { token } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<ErrorType | null>(null);

	const handleUpdate = useCallback(
		async ({
			data,
			url,
			closeModal,
			reset,
		}: {
			url: string;
			data: Record<string, string | number>;
			closeModal: () => void;
			reset: () => void;
		}) => {
			setError(null);
			setLoading(true);
			try {
				const res = await fetchAxios.patch(url, data, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (res) {
					fetchData();
				}
				setMsg(res.data.msg);
				closeModal && closeModal();
				reset && reset();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				const errorResponse = error?.response?.data as ErrorType;
				const errorMessage =
					errorResponse.errors?.find(
						err => err.property === 'uidPatients' || err.property === 'all',
					)?.message || null;

				setMsg(errorMessage);
				setError(errorResponse);
			} finally {
				setLoading(false);
			}
		},
		[fetchData, setMsg, token],
	);
	return { handleUpdate, error, loading };
};
export default useUpdate;
