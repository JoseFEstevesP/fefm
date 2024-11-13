export interface PharmacyStructure {
	uid: string;
	name: string;
	address: string;
	state: string;
	municipality: string;
	uidUser: string;
}

export interface PharmacyProps<T> {
	handleSubmit: () => void;
	errors: FieldErrors<T>;
	error: ErrorType | null;
	control?: Control<T>;
	register: UseFormRegister<T>;
	loading?: boolean;
	value: Record<string, string>;
}
