export const groupByPrefix = ({ obj }) => {
	return Object.keys(obj).reduce((acc, key) => {
		const prefix = key.split('_')[0];

		if (!acc[prefix]) {
			acc[prefix] = [];
		}

		acc[prefix].push({ [key]: obj[key] });
		return acc;
	}, {});
};
