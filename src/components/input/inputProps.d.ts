import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegister,
} from 'react-hook-form';
import { Error } from '../../typeGlobal';

type FormValues<T> = T;

export type ErrorInput =
	| FieldError
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	| Merge<FieldError, FieldErrorsImpl<any>>
	| Merge<FieldError, (FieldError | undefined)[]>
	| Error
	| undefined;

export interface InputProps {
	name: string;
	placeholder?: string;
	error?: ErrorInput;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<FormValues<any>>;
	type?: 'text' | 'number' | 'search' | 'date' | 'email' | 'password' | 'file';
	label?: string;
	disabled?: boolean;
	onChange?;
}

export interface ObjectData {
	value: any;
	label: string;
}

type InputPropsType = Omit<InputProps, 'register'>;
export interface SelectProps extends InputPropsType {
	data: Array<ObjectData>;
	CN?: {
		classContent?: string;
		classStyle?: string;
	};
	control;
	title: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	defaultValue?: string | [];
	variant?: 'standard' | 'filled' | 'outlined';
	multiple?: boolean;
}

export interface SearchProps {
	className?: string;
	placeholder?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<FormValues<any>>;
}
