export interface Option {
	value: string;
	label: string;
}

export interface MultiSelectProps {
	name: string;
	control;
	label?: string;
	placeholder?: string;
	options: Option[];
	error?: ErrorInput;
	className?: string;
	required?: boolean;
}
