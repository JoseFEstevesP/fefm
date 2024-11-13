import { createContext, useState } from 'react';
import { RolContextType, RolParameter, RolStricture } from './rol';

export const ContextRol = createContext<RolContextType>({
	rol: null,
	setRol: () => {},
});

export const RolProvider = ({ children }: RolParameter) => {
	const [rol, setRol] = useState<RolStricture | null>(null);
	return (
		<ContextRol.Provider value={{ rol, setRol }}>
			{children}
		</ContextRol.Provider>
	);
};
