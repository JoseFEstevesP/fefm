import { JSX } from 'react';

export interface TokenParameter {
	children: JSX.Element | string;
}

export interface TokenContextType {
	token: string | null;
	setToken: (token: string | null) => void;
}
