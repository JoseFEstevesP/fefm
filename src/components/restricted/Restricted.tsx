import { ReactNode } from 'react';
import { TypeRol } from '../../context/rol/rol';
import useValidate from '../../hooks/useValidate';

interface RestrictedProps {
	per?: string;
	typeRol?: TypeRol;
	children: ReactNode;
}

const Restricted = ({ per, typeRol, children }: RestrictedProps) => {
	const { handleData, handleName } = useValidate();

	if (per && handleData({ per })) {
		return <>{children}</>;
	}

	if (typeRol && handleName({ typeRol })) {
		return <>{children}</>;
	}

	return null;
};

export default Restricted;
