import { JSX } from 'react';

export interface MsgParameter {
	children: JSX.Element | string;
}

export interface MsgContextType {
	msg: string | null;
	setMsg: (token: string | null) => void;
}
