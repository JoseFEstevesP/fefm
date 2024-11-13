import { Permission, permissionTranslations } from '../enum/dataRol';
import { groupPermissions } from '../function/groupPermissions';
import usePermissionCheckboxes from '../hooks/usePermissionCheckboxes';
import { PermissionCheckboxListProps } from '../sectionDataRolType';
import Checkbox from './checkbox/Checkbox';

const PermissionCheckboxList = ({
	permissions,
	handleCheck,
	defaultValue,
}: PermissionCheckboxListProps) => {
	const { selectedPermissions, isSuperUserChecked, handleData } =
		usePermissionCheckboxes({ initialPermissions: defaultValue, handleCheck });
	const groupedPermissions = groupPermissions(permissions);

	return (
		<div>
			{Object.entries(groupedPermissions).map(([key, perms]) => (
				<div key={key}>
					<h4>{permissionTranslations[key] || key}</h4>
					{perms.map(permission => (
						<Checkbox
							key={permission.value}
							value={permission.value}
							title={
								permissionTranslations[permission.value] || permission.label
							}
							onClick={handleData}
							checked={selectedPermissions.includes(permission.value)}
							disabled={
								isSuperUserChecked && permission.value !== Permission.super
							}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default PermissionCheckboxList;
