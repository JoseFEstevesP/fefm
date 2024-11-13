export interface MedicamentStructure {
	uid: string;
	name: string;
	description: string;
	uidUser: string;
}

export interface MedicamentProps<T> {
	handleSubmit: () => void;
	errors: FieldErrors<T>;
	error: ErrorType | null;
	register: UseFormRegister<T>;
	loading?: boolean;
}
