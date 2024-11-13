import { PermissionOption } from '../sectionDataRolType';

export const groupPermissions = (permissions: PermissionOption[]) => {
	const grouped = permissions.reduce(
		(acc, curr) => {
			const key = curr.value.split('_')[0];
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(curr);
			return acc;
		},
		{} as Record<string, PermissionOption[]>,
	);

	return grouped;
};
