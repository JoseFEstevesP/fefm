export const prefixesData = ({ object, prefix }) => {
	return Object.keys(object).reduce((acc, key) => {
		acc[`${prefix}${key}`] = object[key];
		return acc;
	}, {});
};
