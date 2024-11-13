import { FilterDataDTOType } from '../../dto/filterDataDTO';
import { Permission } from '../../page/admin/optionsRol/enum/permissions';

interface FilterProps {
	handleData: (data: FilterDataDTOType) => void;
	className?: string;
	btn:
		| {
				handleOpen: () => void;
				text: string;
		  }
		| undefined;
	handleResetData: () => void;
	permissions: {
		add: Permission;
		read: Permission;
	};
	selectOptions: {
		orderPropertyOptions: Record<string, string>;
		textOrderProperty: Record<string, string>;
	};
	orderProperty: string;
}
