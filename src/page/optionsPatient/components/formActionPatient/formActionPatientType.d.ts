export interface dataVL {
	value: string | undefined | null;
	label: string;
}

export interface DataLabel {
	[key: string]: dataVL;
}

export interface PatientData {
	uid: string | undefined;
	title: string;
	section: string;
	dataLabel: DataLabel;
}
