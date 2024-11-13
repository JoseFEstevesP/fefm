import { Dispatch, SetStateAction } from 'react';
import {
	MedicamentData,
	ObjectDataAddMedicament,
} from '../../components/patient/formRegisterPatient/formRegisterPatientTypes';
import { YN } from '../../enum/data';

export interface OptionsPatientProps {
	setMenu: Dispatch<SetStateAction<boolean>>;
	className?: string;
}

export interface PatientDataAuthorized {
	uid: string;
	persons_data: boolean;
	v_e: null | string;
	ci: null | string;
	first_name: null | string;
	middle_name: null | string;
	first_surname: null | string;
	last_surname: null | string;
	sex: null | string;
	family_relationship: null | string;
}

export interface PatientDataEconomic {
	uid: string;
	monthly_income: string;
	receives_help_from_a_relative_or_friend: string;
	ingreso_carnet_subsidio: YN;
	average_monthly_fixed_expenses: string;
	average_monthly_variable_expenses: string;
}

export interface PatientDataFamily {
	uid: string;
	reside_in_housing: string;
	inhabit_5_18: string;
	contribute_expenses: string;
	work_housing: string;
}

export interface PatientDataHousing {
	uid: string;
	you_are_head_of_household: string;
	city: string;
	state: string;
	municipality: string;
	parish: string;
	address: string;
	physical_condition_of_the_house: string;
	type_of_dwelling: string;
	dwelling_is: string;
	how_many_spaces_in_the_home: string;
	main_phone_number: string;
	otherPhoneNumber: string;
}

export interface PatientDataHousingEx {
	uid: string;
	main_mat_house: string;
	floor_mat: string;
	num_rooms: string;
	elec_light: string;
	water_source: string;
	bathroom_type: string;
	appliances: string[];
	cooking_fuel: string;
}

export interface PatientDataUser {
	uid: string;
	v_e: string;
	ci: string;
	first_name: string;
	middle_name: string;
	first_surname: string;
	last_surname: string;
	sex: string;
	phone: string;
	email: string;
	place_of_birth: string;
	date_of_birth: Date;
	age: string;
	grade_of_study: string;
	marital_status: string;
	children: string;
	number_of_children: null;
	occupation: string;
}

export interface PatientDataMedical {
	uid: string;
	medical_disability: string;
	health_care_safety_plan: string;
	name_of_health_care_facility: string;
	medical_specialty: string;
	treating_physician_name: string;
	uidPathology: string;
	uidMedicament: string;
	daily_dosage: string;
	medicament: {
		name: string;
	};
	pathology: {
		name: string;
	};
}

export interface PatientDataTypes {
	uid: string;
	uidDataUser: string;
	uidDataHousing: string;
	uidDataHousingEx: string;
	uidDataFamily: string;
	uidDataMedical: string;
	uidDataEconomic: string;
	uidDataAuthorized: string;
	uidUser: string;
	medicationRequest: MedicationRequest;
	patientDataUser: PatientDataUser;
	patientDataHousing: PatientDataHousing;
	patientDataHousingEx: PatientDataHousingEx;
	patientDataFamily: PatientDataFamily;
	patientDataMedical: PatientDataMedical;
	patientDataEconomic: PatientDataEconomic;
	patientDataAuthorized: PatientDataAuthorized;
}

export interface DataPatient extends PatientDataTypes {
	uidPatient: string;
}

export interface FindAllDataUser {
	rows: PatientDataUser[];
	count: number;
	currentPage: number;
	nextPage: null;
	previousPage: null;
	limit: number;
	pages: number;
}

export interface FormPatientProps<T> {
	handleSubmit: () => void;
	errors: FieldErrors<T>;
	error: ErrorType | null;
	control?: Control<T>;
	register?: UseFormRegister<T>;
	loading: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	disabled?: boolean;
	value?: any;
	loadingPathologies?: boolean;
	pathologies?: ObjectDataAddMedicament[];
	medications?: MedicamentData[];
	active?: boolean;
	setActive?: React.Dispatch<React.SetStateAction<boolean>>;
	handleSubmitRegister?: (data: any) => Promise<void>;
	update?: boolean;
}

interface MedicationRequest {
	uid: string;
	photo_recipe: string;
	photo_medical_report: string;
	date_of_medical_report: string;
	code: string;
	delivery_status: string;
	msg: string | null;
	updatedAt: string;
	deliveryData: DeliveryData[];
}

interface DeliveryData {
	uid: string;
	quantity: number;
	createdAt: string;
	pharmacy: Pharmacy;
	medicament: Medicament;
}

interface Pharmacy {
	uid: string;
	name: string;
	address: string;
	state: string;
	municipality: string;
}

interface Medicament {
	name: string;
}
