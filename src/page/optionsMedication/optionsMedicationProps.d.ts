import { Dispatch, SetStateAction } from 'react';

export interface OptionsMedicationProps {
	setMenu: Dispatch<SetStateAction<boolean>>;
	className?: string;
}

export interface Pharmacy {
	name: string;
	address: string;
	state: string;
	municipality: string;
}

export interface MedicationRequest {
	uid: string;
	photo_recipe: string;
	photo_medical_report: string;
	date_of_medical_report: string;
	code: string;
	quantity: string;
	delivery_status: string;
	pharmacy: Pharmacy | null;
	ci: string;
	v_e: string;
	state: string;
	municipality: string;
	pathology_name: string;
	medicament_name: string;
	msg?: string;
	uidPharmacy?: string;
}

export type MedicationRequestAdmin = Pick<
	MedicationRequest,
	'uid' | 'quantity' | 'delivery_status' | 'msg' | 'uidPharmacy'
>;

export interface FormMedicationProps<T> {
	handleSubmit: () => void;
	errors: FieldErrors<T>;
	error: ErrorType | null;
	register: UseFormRegister<T>;
	loading?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleCheck?: any;
	urlModal?: string | null;
	handleClose?: () => void;
	isOpen?: boolean;
	photoRecipe?: string | null;
	handleImageModal?: (data: any) => void;
	photoMedicalReport?: string | null;
	isUpdate?: boolean;
	control?: any;
}
