import { ErrorType } from '../typeGlobal';

export const formateError = ({
	name,
	error,
}: {
	name: string;
	error: ErrorType | null;
}) => {
	return error?.errors.find(item => item.property === name);
};
