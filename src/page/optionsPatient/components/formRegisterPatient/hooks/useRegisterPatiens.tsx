import React, { useCallback, useContext, useState } from 'react';
import { ErrorType } from '../../../../../typeGlobal';
import { ContextToken } from '../../../../../context/token/TokenContext';
import { fetchAxios } from '../../../../../constants/axios';
import { textToFirstCapitalLetter } from '../../../../../functions/textToFirstCapitalLetter';

const useRegisterPatient = ({
	url,
	setResRegister,
	setData,
	nameRegister,
}: {
	url: string;
	setResRegister: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
	setData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
	nameRegister: string;
}) => {
	const [error, setError] = useState<ErrorType | null>(null);
	const [loading, setLoading] = useState(false);
	const { token } = useContext(ContextToken);

	const handleSubmitRegister = useCallback(
		async data => {
			setError(null);
			setLoading(true);
			try {
				const newData = {
					uid: crypto.randomUUID(),
					...data,
				};
				await fetchAxios.post(url, newData, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setData(prev => ({
					...prev,
					[`uidData${textToFirstCapitalLetter({ text: nameRegister })}`]:
						newData.uid,
				}));
				setResRegister(prev => ({
					...prev,
					[nameRegister]: true,
				}));
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setError(error?.response?.data);
			} finally {
				setLoading(false);
			}
		},
		[nameRegister, setData, setResRegister, token, url],
	);
	return { handleSubmitRegister, error, loading };
};
export default useRegisterPatient;
