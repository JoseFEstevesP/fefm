export interface PatientDataBY_CI {
	patientDataUser: PatientDataUser;
	patientDataHousing: PatientDataHousing;
	patientDataHousingEx: PatientDataHousingEx;
	patientDataFamily: PatientDataFamily;
	patientDataMedical: PatientDataMedical;
	patientDataEconomic: PatientDataEconomic;
	patientDataAuthorized: PatientDataAuthorized;
	medicationRequest: MedicationRequest[];
}

export interface MedicationRequest {
	uid: string;
	photo_recipe: string;
	photo_medical_report: string;
	date_of_medical_report: Date;
	code: string;
	quantity: number;
	delivery_status: string;
	msg: null;
	status: boolean;
	uidUser: string;
	uidPharmacy: string;
	uidPatients: string;
	createdAt: Date;
	updatedAt: Date;
	deliveryData: DeliveryDatum[];
}

export interface DeliveryDatum {
	uid: string;
	quantity: number;
	createdAt: Date;
	pharmacy: Pharmacy;
	medicament: Medicament;
}

export interface Medicament {
	name: string;
}

export interface Pharmacy {
	uid: string;
	name: string;
	address: string;
	state: string;
	municipality: string;
}

export interface PatientDataAuthorized {
	uid: string;
	persons_data: boolean;
	v_e: null;
	ci: null;
	first_name: null;
	middle_name: null;
	first_surname: null;
	last_surname: null;
	sex: null;
	family_relationship: null;
}

export interface PatientDataEconomic {
	uid: string;
	monthly_income: string;
	receives_help_from_a_relative_or_friend: string;
	ingreso_carnet_subsidio: string;
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

export interface PatientDataMedical {
	uid: string;
	medical_disability: string;
	health_care_safety_plan: string;
	name_of_health_care_facility: string;
	medical_specialty: string;
	treating_physician_name: string;
	daily_dosage: string;
	uidPathology: string;
	uidMedicament: string;
	medicament: Medicament;
	pathology: Medicament;
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
	date_of_birth: string;
	age: string;
	grade_of_study: string;
	marital_status: string;
	children: string;
	number_of_children: string;
	occupation: string;
}

interface SectionDataMRProps {
	className?: string;
	data;
}
