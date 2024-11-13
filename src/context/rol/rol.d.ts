import { JSX } from 'react';

export type TypeRol = 'user' | 'admin';

export interface RolStricture {
	permissions: string[];
	name: string;
	typeRol: TypeRol;
}

export interface RolParameter {
	children: JSX.Element | string;
}

export interface RolContextType {
	rol: RolStricture | null;
	setRol: (rol: RolStricture | null) => void;
}
