import { useCallback, useState } from 'react';

const useCheck = () => {
	const [dataCheck, setDataCheck] = useState<string[]>([]);

	const handelCheck = useCallback(e => {
		const { value, checked } = e.target;
		setDataCheck(ol => {
			if (checked) {
				return [...new Set([...ol, value])];
			} else {
				return ol.filter(item => item !== value);
			}
		});
	}, []);

	const valueString = useCallback(() => {
		return dataCheck.join();
	}, [dataCheck]);

	return { dataCheck, setDataCheck, handelCheck, valueString };
};
export default useCheck;
