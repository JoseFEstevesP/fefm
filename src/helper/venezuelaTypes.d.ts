export interface Municipio {
	municipio: string;
	parroquias: string[];
}

export interface Estado {
	estado: string;
	municipios: Municipio[];
}

export interface StateItem {
	value: string;
	label: string;
}

export interface MunicipalityParams {
	state: string | undefined;
}

export interface ParishParams extends MunicipalityParams {
	municipality: string | undefined;
}
