import { OrderEnum } from './enum/data';

export interface Error {
	property: string;
	message: string;
}

export interface ErrorType {
	errors: Error[];
}

export interface ParamsData {
	status?: boolean;
	limit?: number;
	page?: number;
	orderProperty?: string;
	order?: OrderEnum;
	search?: string;
}

export interface FindAllData<T> {
	rows: T[];
	count: number;
	currentPage: number;
	nextPage: null;
	previousPage: null;
	limit: number;
	pages: number;
}
