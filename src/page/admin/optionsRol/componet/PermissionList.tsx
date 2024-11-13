import { Permission, permissionTranslations } from '../enum/dataRol';

const groupPermissions = (permissions: Permission[]) => {
	const grouped = permissions.reduce(
		(acc, curr) => {
			const key = curr.split('_')[0];
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(curr);
			return acc;
		},
		{} as Record<string, Permission[]>,
	);

	return grouped;
};

const PermissionList = ({ permissions }: { permissions: Permission[] }) => {
	const uniquePermissions = Array.from(new Set(permissions)).sort();
	const groupedPermissions = groupPermissions(uniquePermissions);

	return (
		<div>
			{Object.entries(groupedPermissions).map(([key, perms]) => (
				<div key={key}>
					<h4>{permissionTranslations[key] || key}</h4>
					<ul>
						{perms.map(permission => (
							<li key={crypto.randomUUID()}>
								{permissionTranslations[permission] || permission}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default PermissionList;
