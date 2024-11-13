import { ErrorType } from '../typeGlobal';

interface UseRegisterReturn<T> {
	handleSubmitRegister: (params: {
		data: T;
		closeModal?: () => void;
		reset?: () => void;
	}) => Promise<void>;
	error: ErrorType | null;
	loading: boolean;
}
