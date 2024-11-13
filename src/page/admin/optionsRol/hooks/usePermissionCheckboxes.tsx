import { useCallback, useEffect, useState } from 'react';
import { Permission } from '../enum/dataRol';

const usePermissionCheckboxes = ({
	initialPermissions,
	handleCheck,
}: {
	initialPermissions?: string[];
	handleCheck: (selectedPermissions: string[]) => void;
}) => {
	const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
	const [isSuperUserChecked, setIsSuperUserChecked] = useState(false);

	useEffect(() => {
		if (initialPermissions) {
			setSelectedPermissions(initialPermissions);
			if (initialPermissions[0] === Permission.super) {
				setIsSuperUserChecked(prev => !prev);
				setSelectedPermissions(prev =>
					prev.includes(Permission.super)
						? [Permission.super]
						: [Permission.super],
				);
			}
		}
	}, [initialPermissions]);

	const handleData = useCallback((value: string) => {
		setSelectedPermissions(prev => {
			if (prev.includes(value)) {
				return prev.filter(item => item !== value);
			} else {
				return [...prev, value];
			}
		});

		if (value === Permission.super) {
			setIsSuperUserChecked(prev => !prev);
			setSelectedPermissions(prev =>
				prev.includes(Permission.super)
					? [Permission.super]
					: [Permission.super],
			);
		}
	}, []);

	useEffect(() => {
		handleCheck(selectedPermissions);
	}, [handleCheck, selectedPermissions]);

	return {
		selectedPermissions,
		isSuperUserChecked,
		handleData,
	};
};

export default usePermissionCheckboxes;
