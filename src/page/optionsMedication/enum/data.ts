export enum OrderMedicationRequestProperty {
	ci = 'ci',
	medicament_name = 'medicament_name',
	code = 'code',
	delivery_status = 'delivery_status',
}

export const textOrderMedication = {
	ci: 'Cedula',
	medicament_name: 'Medicamento',
	code: 'Código',
	delivery_status: 'Estatus de la petición',
};

export enum headerMedicationRequestProperty {
	ci = 'ci',
	medicament_name = 'medicament_name',
	quantity = 'quantity',
	code = 'code',
	delivery_status = 'delivery_status',
}

export const headerTextOrderMedication = {
	ci: 'Cedula',
	medicament_name: 'Medicamento',
	quantity: 'Cantidad de medicamentos',
	code: 'Código',
	delivery_status: 'Estatus de la petición',
};

export enum DeliveryStatus {
	en_espera = 'en espera',
	aceptada = 'aceptada',
	rechazada = 'rechazada',
	entregado = 'entregado',
}
