import { JSX } from 'react';

export interface ProfileParameter {
	children: JSX.Element | string;
}

export interface ProfileContextType {
	profile: Record<string, string> | null;
	setProfile: (token: Record<string, string> | null) => void;
}
