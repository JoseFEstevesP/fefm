import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorType } from '../../typeGlobal';
import { Permission } from './optionsRol/enum/permissions';
import { Rol } from './optionsUser/components/FormRegisterUser';

export interface FormUserAdminProps<T> {
	handleSubmit: () => void;
	errors: FieldErrors<T>;
	error: ErrorType | null;
	control?: Control<T>;
	register: UseFormRegister<T>;
	rolData?: Rol[] | null;
	loading?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleCheck?: any;
	defaultValue?: Permission[];
	handleOpen?: () => void;
}
