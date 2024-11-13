import data from './venezuela.json';
import {
	Estado,
	MunicipalityParams,
	Municipio,
	ParishParams,
	StateItem,
} from './venezuelaTypes';

export const state = (): StateItem[] => {
	return data
		.map((item: Estado) => ({
			value: item.estado,
			label: item.estado,
		}))
		.sort((a, b) => a.label.localeCompare(b.label));
};

export const municipality = ({
	state,
}: MunicipalityParams): StateItem[] | undefined => {
	const stateData = data.find((item: Estado) => item.estado === state);
	return stateData?.municipios
		.map((item: Municipio) => ({
			value: item.municipio,
			label: item.municipio,
		}))
		.sort((a, b) => a.label.localeCompare(b.label));
};

export const parish = ({
	state,
	municipality,
}: ParishParams): StateItem[] | undefined => {
	const stateData = data.find((item: Estado) => item.estado === state);
	const municipalityData = stateData?.municipios.find(
		(item: Municipio) => item.municipio === municipality,
	);
	return municipalityData?.parroquias
		.map((item: string) => ({
			value: item,
			label: item,
		}))
		.sort((a, b) => a.label.localeCompare(b.label));
};
