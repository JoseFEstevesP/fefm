import { createContext, useState } from 'react';
import { TokenContextType, TokenParameter } from './token';

export const ContextToken = createContext<TokenContextType>({
	token: null,
	setToken: () => {},
});

export const TokenProvider = ({ children }: TokenParameter) => {
	const [token, setToken] = useState<string | null>(
		sessionStorage.getItem('jwt'),
	);
	return (
		<ContextToken.Provider value={{ token, setToken }}>
			{children}
		</ContextToken.Provider>
	);
};
