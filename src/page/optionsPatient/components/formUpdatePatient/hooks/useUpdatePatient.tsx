import { useCallback, useContext, useState } from 'react';
import { fetchAxios } from '../../../../../constants/axios';
import { ContextMsg } from '../../../../../context/msg/MsgContext';
import { ContextToken } from '../../../../../context/token/TokenContext';
import { ErrorType } from '../../../../../typeGlobal';

const useUpdatePatient = ({ url, uid, modalClose, handleGetData }) => {
	const { token } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);
	const [error, setError] = useState<ErrorType | null>(null);
	const [loading, setLoading] = useState(false);
	const [updateData, setUpdateData] = useState<Record<string, string> | null>(
		null,
	);

	const handleUpdate = useCallback(
		async data => {
			try {
				const res = await fetchAxios.patch(
					url,
					{ uid, ...data },
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				if (res) {
					setMsg(res.data.msg);
					setUpdateData({ uid, ...data });
					modalClose();
					handleGetData();
				}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setError(error?.response?.data);
			} finally {
				setLoading(false);
			}
		},
		[handleGetData, modalClose, setMsg, token, uid, url],
	);
	return { handleUpdate, error, loading, updateData };
};
export default useUpdatePatient;
