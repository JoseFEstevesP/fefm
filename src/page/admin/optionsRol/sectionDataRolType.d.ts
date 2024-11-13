import { Permission } from './enum/permissions';

export interface PermissionsTypeActions {
	key: any;
	ref: any;
	props: Props;
	_owner: Owner;
	_store: Store;
}

export interface Props {
	permissions: Permission[];
}

export interface Owner {
	tag: number;
	key: any;
	stateNode: any;
	return: any;
	child: any;
	sibling: any;
	index: number;
	ref: any;
	pendingProps: any;
	memoizedProps: any;
	updateQueue: any;
	memoizedState: any;
	dependencies: any;
	mode: number;
	flags: number;
	subtreeFlags: number;
	deletions: any;
	lanes: number;
	childLanes: number;
	alternate: any;
	actualDuration: number;
	actualStartTime: number;
	selfBaseDuration: number;
	treeBaseDuration: number;
	_debugSource: DebugSource;
	_debugOwner: any;
	_debugNeedsRemount: boolean;
	_debugHookTypes: string[];
}

export interface DebugSource {
	fileName: string;
	lineNumber: number;
	columnNumber: number;
}

export interface Store {}

export interface PermissionCheckboxListProps {
	permissions: PermissionOption[];
	handleCheck: (selectedPermissions: string[]) => void;
	defaultValue?: Permission[];
}

export interface PermissionOption {
	value: string;
	label: string;
}

export interface FormRegisterRolProps {
	closeModal?: () => void;
	handleGetData?: () => void;
}

export interface RolStructure {
	uid: string;
	name: string;
	typeRol: string;
	permissions: Permission[];
}

export interface RolStructureActions extends RolStructure {
	permissions: PermissionsTypeActions;
}
