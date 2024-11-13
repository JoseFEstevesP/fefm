import { useCallback, useContext, useState } from 'react';
import { fetchAxios } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { ContextToken } from '../context/token/TokenContext';
import { ErrorType } from '../typeGlobal';
import { UseRegisterReturn } from './UseHooksType';

const useRegister = <T,>({
	url,
	handleGetData,
}: {
	url: string;
	handleGetData?: () => void;
}): UseRegisterReturn<T> => {
	const [error, setError] = useState<ErrorType | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const { setMsg } = useContext(ContextMsg);
	const { token } = useContext(ContextToken);

	const handleSubmitRegister = useCallback(
		async ({
			data,
			closeModal,
			reset,
		}: {
			data: T;
			closeModal?: () => void;
			reset?: () => void;
		}) => {
			setError(null);
			setLoading(true);

			try {
				const newData = {
					uid: crypto.randomUUID(),
					...data,
				};

				const headers: Record<string, string> = token
					? { Authorization: `Bearer ${token}` }
					: {};

				const res = await fetchAxios.post(url, newData, { headers });

				setMsg(res.data.msg);
				handleGetData?.();
				closeModal?.();
				reset?.();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				const errorResponse = err?.response?.data as ErrorType;
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
		[handleGetData, setMsg, token, url],
	);

	return { handleSubmitRegister, error, loading };
};

export default useRegister;
