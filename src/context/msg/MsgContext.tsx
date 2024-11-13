import { createContext, useState } from 'react';
import { MsgContextType, MsgParameter } from './msg';

export const ContextMsg = createContext<MsgContextType>({
	msg: null,
	setMsg: () => {},
});

export const MsgProvider = ({ children }: MsgParameter) => {
	const [msg, setMsg] = useState<string | null>(null);
	return (
		<ContextMsg.Provider value={{ msg, setMsg }}>
			{children}
		</ContextMsg.Provider>
	);
};
