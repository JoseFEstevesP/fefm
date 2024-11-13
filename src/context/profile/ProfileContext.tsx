import { createContext, useState } from 'react';
import { ProfileContextType, ProfileParameter } from './profile';

export const ContextProfile = createContext<ProfileContextType>({
	profile: null,
	setProfile: () => {},
});

export const ProfileProvider = ({ children }: ProfileParameter) => {
	const [profile, setProfile] = useState<Record<string, string> | null>(null);
	return (
		<ContextProfile.Provider value={{ profile, setProfile }}>
			{children}
		</ContextProfile.Provider>
	);
};
