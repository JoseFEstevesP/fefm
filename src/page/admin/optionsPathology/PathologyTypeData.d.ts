import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorType } from '../../../typeGlobal';

export interface MedicamentsProps {
	uid: string;
	name: string;
	description: string;
}

export interface MedicamentsLabel {
	label: string;
	value: string;
}

export interface PathologyStructure {
	uid: string;
	name: string;
	description: string;
	state: string;
	medicaments: MedicamentsProps[];
}

export interface PathologyProps<T> {
	handleSubmit: () => void;
	errors: FieldErrors<T>;
	error: ErrorType | null;
	control?: Control<T>;
	register: UseFormRegister<T>;
	loading?: boolean;
	setMedical?: React.Dispatch<React.SetStateAction<MedicamentsLabel[] | null>>;
}
