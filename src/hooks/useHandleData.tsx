import { useCallback, useState } from 'react';
import { ParamsData } from '../typeGlobal';
import useGet from './useGet';

const useHandleData = <T,>({ url }: { url: string }) => {
	const { getData } = useGet();
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState<null | T>(null);

	const fetchData = useCallback(
		async ({ params }: { params?: ParamsData | undefined }) => {
			try {
				const dataRes: T = await getData({
					url,
					params,
				});
				setData(dataRes);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		},
		[getData, url],
	);

	return {
		currentPage,
		setCurrentPage,
		data,
		setData,
		fetchData,
	};
};

export default useHandleData;
