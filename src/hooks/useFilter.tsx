import { useCallback, useMemo, useState } from 'react';
import { OrderEnum } from '../enum/data';
import { ParamsData } from '../typeGlobal';

const useFilter = ({ orderProperty }) => {
	const defaultValue = useMemo(
		() => ({
			limit: 20,
			order: OrderEnum.ASC,
			orderProperty,
			page: 1,
		}),
		[orderProperty],
	);
	const [filter, setFilter] = useState<ParamsData>(defaultValue);

	const handlePagination = useCallback(async (_, val: number) => {
		setFilter(olValue => ({ ...olValue, page: val }));
	}, []);

	const handleDataPagination = useCallback(data => {
		setFilter(olValue => ({ ...olValue, ...data }));
	}, []);

	const handleResetData = useCallback(() => {
		setFilter(defaultValue);
	}, [defaultValue]);

	return {
		filter,
		handlePagination,
		handleDataPagination,
		handleResetData,
	};
};
export default useFilter;
