export interface DataRegisterPatient {
	uidDataUser: string;
	uidDataHousing: string;
	uidDataHousingExData: string;
	uidDataFamily: string;
	uidDataMedical: string;
	uidDataEconomic: string;
	uidDataAuthorized: string;
}

export interface MedicamentData {
	value: string;
	label: string;
}

export interface ObjectDataAddMedicament {
	value: string;
	label: string;
	medicaments: MedicamentData[];
}
