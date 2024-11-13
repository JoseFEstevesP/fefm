import { addMonth, format } from '@formkit/tempo';
import { PatientDataBY_CI } from '../../dataPatientQR/dataPatientQRProps';

export const patientDataUser = (data: PatientDataBY_CI | null) => ({
	uid: data?.patientDataUser.uid,
	section: 'patientDataUser',
	title: 'Datos personales',
	dataLabel: {
		ci: {
			value: `${data?.patientDataUser.v_e} - ${data?.patientDataUser.ci}`,
			label: 'cedula',
		},
		name: {
			value: `${data?.patientDataUser.first_name} - ${data?.patientDataUser.middle_name}`,
			label: 'nombre',
		},
		surname: {
			value: `${data?.patientDataUser.first_surname} - ${data?.patientDataUser.last_surname}`,
			label: 'apellido',
		},
		sex: {
			value: `${data?.patientDataUser.sex}`,
			label: 'sexo',
		},
		place_of_birth: {
			value: `${data?.patientDataUser.place_of_birth}`,
			label: 'lugar de nacimiento',
		},
		date_of_birth: {
			value: `${data?.patientDataUser.date_of_birth}`,
			label: 'fecha de nacimiento',
		},
		grade_of_study: {
			value: `${data?.patientDataUser.grade_of_study}`,
			label: 'grado de estudio',
		},
		marital_status: {
			value: `${data?.patientDataUser.marital_status}`,
			label: 'estado civil',
		},
		number_of_children: {
			value: `${data?.patientDataUser.children === 'no' ? '0' : data?.patientDataUser.number_of_children}`,
			label: 'número de hijos',
		},
		occupation: {
			value: `${data?.patientDataUser.occupation}`,
			label: 'ocupación',
		},
		email: {
			value: `${data?.patientDataUser.email}`,
			label: 'correo',
		},
		phone: {
			value: `${data?.patientDataUser.phone}`,
			label: 'teléfono',
		},
	},
});
export const patientDataMedical = (data: PatientDataBY_CI | null) => {
	return {
		uid: data?.patientDataMedical.uid,
		section: 'patientDataMedical',
		title: 'Datos medicos',
		dataLabel: {
			medical_disability: {
				value: data?.patientDataMedical.medical_disability,
				label: '¿Tiene alguna de las siguientes condiciones o discapacidad?',
			},
			health_care_safety_plan: {
				value: data?.patientDataMedical.health_care_safety_plan,
				label: '¿Tiene algún plan de seguridad de atención médica?',
			},
			name_of_health_care_facility: {
				value: data?.patientDataMedical.name_of_health_care_facility,
				label: 'Nombre del centro de salud donde recibe atención médica',
			},
			medical_specialty: {
				value: data?.patientDataMedical.medical_specialty,
				label: 'Especialidad del médico tratante',
			},
			treating_physician_name: {
				value: data?.patientDataMedical.treating_physician_name,
				label: 'Nombre del médico tratante',
			},
			pathologyName: {
				value: data?.patientDataMedical.pathology.name,
				label: 'Nombre de la patología',
			},
			medicamentName: {
				value: data?.patientDataMedical.medicament.name,
				label: 'Nombre del medicamento',
			},
			daily_dosage: {
				value: data?.patientDataMedical.daily_dosage,
				label: 'Dosificación diaria',
			},
		},
	};
};
export const patientDataHousing = (data: PatientDataBY_CI | null) => ({
	uid: data?.patientDataHousing.uid,
	section: 'patientDataHousing',
	title: 'Datos de vivienda',
	dataLabel: {
		medical_disability: {
			value: data?.patientDataHousing.you_are_head_of_household,
			label: `¿Usted es jefe de familia?`,
		},
		city: {
			value: data?.patientDataHousing.city,
			label: `ciudad`,
		},
		state: {
			value: data?.patientDataHousing.state,
			label: `estado`,
		},
		municipality: {
			value: data?.patientDataHousing.municipality,
			label: `municipio`,
		},
		parish: {
			value: data?.patientDataHousing.parish,
			label: `parroquia`,
		},
		address: {
			value: data?.patientDataHousing.address,
			label: `dirección completa`,
		},
		physical_condition_of_the_house: {
			value: data?.patientDataHousing.physical_condition_of_the_house,
			label: `Estado físico de la vivienda`,
		},
		type_of_dwelling: {
			value: data?.patientDataHousing.type_of_dwelling,
			label: `Tipo de vivienda`,
		},
		dwelling_is: {
			value: data?.patientDataHousing.dwelling_is,
			label: '¿La vivienda es?',
		},
		how_many_spaces_in_the_home: {
			value: data?.patientDataHousing.how_many_spaces_in_the_home,
			label: '¿Cuántos espacios tiene la vivienda?',
		},
		main_phone_number: {
			value: data?.patientDataHousing.main_phone_number,
			label: 'Teléfono principal',
		},
		otherPhoneNumber: {
			value: data?.patientDataHousing.otherPhoneNumber,
			label: 'Otro número de teléfono',
		},
	},
});
export const patientDataHousingEx = (data: PatientDataBY_CI | null) => ({
	uid: data?.patientDataHousingEx.uid,
	section: 'patientDataHousingEx',
	title: 'Datos de extas vivienda',
	dataLabel: {
		main_mat_house: {
			value: data?.patientDataHousingEx.main_mat_house,
			label: 'Material predominante de la vivienda',
		},
		floor_mat: {
			value: data?.patientDataHousingEx.floor_mat,
			label: 'Material predominante en el piso de la vivienda',
		},
		num_rooms: {
			value: data?.patientDataHousingEx.num_rooms,
			label: '¿Cuántas habitaciones tiene la vivienda?',
		},
		elec_light: {
			value: data?.patientDataHousingEx.elec_light,
			label: '¿La vivienda posee luz eléctrica?',
		},
		water_source: {
			value: data?.patientDataHousingEx.water_source,
			label: '¿La vivienda cuenta con agua por?',
		},
		bathroom_type: {
			value: data?.patientDataHousingEx.bathroom_type,
			label: '¿La vivienda tiene baño con?',
		},
		appliances: {
			value: data?.patientDataHousingEx.appliances.join(', ') || 'N/A',
			label: '¿La vivienda dispone de artefactos como?',
		},
		cooking_fuel: {
			value: data?.patientDataHousingEx.cooking_fuel,
			label: 'Tipo de combustible para cocinar',
		},
	},
});
export const patientDataEconomic = (data: PatientDataBY_CI | null) => ({
	uid: data?.patientDataEconomic.uid,
	section: 'patientDataEconomic',
	title: 'Datos de económicos',
	dataLabel: {
		monthly_income: {
			value: data?.patientDataEconomic.monthly_income,
			label: 'Indique su ingreso mensual',
		},
		receives_help_from_a_relative_or_friend: {
			value: data?.patientDataEconomic.receives_help_from_a_relative_or_friend,
			label: '¿Recibe ayuda de algún pariente o amigo?',
		},
		ingreso_carnet_subsidio: {
			value: data?.patientDataEconomic.ingreso_carnet_subsidio,
			label:
				'¿Percibe ingresos por carnet de la patria u otro mecanismo de subsidio?',
		},
		average_monthly_fixed_expenses: {
			value: data?.patientDataEconomic.average_monthly_fixed_expenses,
			label: 'Promedio mensual de gastos fijos',
		},
		average_monthly_variable_expenses: {
			value: data?.patientDataEconomic.average_monthly_variable_expenses,
			label: 'Promedio mensual de gastos variables',
		},
	},
});
export const patientDataFamily = (data: PatientDataBY_CI | null) => ({
	uid: data?.patientDataFamily.uid,
	section: 'patientDataFamily',
	title: 'Datos de familiares',
	dataLabel: {
		reside_in_housing: {
			value: data?.patientDataFamily.reside_in_housing,
			label: '¿Cuántas personas residen en la vivienda?',
		},
		inhabit_5_18: {
			value: data?.patientDataFamily.inhabit_5_18,
			label: '¿Cuántas personas entre 5 y 18 años habitan la vivienda?',
		},
		contribute_expenses: {
			value: data?.patientDataFamily.contribute_expenses,
			label: '¿Cuántas personas aportan para los gastos de la vivienda?',
		},
		work_housing: {
			value: data?.patientDataFamily.work_housing,
			label: '¿Cuántos integrantes de la vivienda trabajan?',
		},
	},
});
export const patientDataAuthorized = (data: PatientDataBY_CI | null) => ({
	uid: data?.patientDataAuthorized.uid,
	section: 'patientDataAuthorized',
	title: 'Datos de autorizado',
	dataLabel: {
		v_e: {
			value: data?.patientDataAuthorized.v_e,
			label: 'nacionalidad',
		},
		ci: {
			value: data?.patientDataAuthorized.ci,
			label: 'cédula',
		},
		first_name: {
			value: data?.patientDataAuthorized.first_name,
			label: 'primer nombre',
		},
		middle_name: {
			value: data?.patientDataAuthorized.middle_name,
			label: 'segundo nombre',
		},
		first_surname: {
			value: data?.patientDataAuthorized.first_surname,
			label: 'primer apellido',
		},
		last_surname: {
			value: data?.patientDataAuthorized.last_surname,
			label: 'segundo apellido',
		},
		sex: {
			value: data?.patientDataAuthorized.sex,
			label: 'sexo',
		},
		family_relationship: {
			value: data?.patientDataAuthorized.family_relationship,
			label: 'Parentesco con el familiar',
		},
	},
});
export const medicationRequest = (dataMedication: PatientDataBY_CI | null) => {
	const data = dataMedication && dataMedication?.medicationRequest[0];
	const deliveryDate = data?.updatedAt
		? addMonth(new Date(data.updatedAt), 1)
		: null;

	const deliveryData = () => {
		const deliveryNumber = data?.deliveryData.length || 0;
		const deliveryMap =
			data?.deliveryData.map(item => {
				return {
					quantity: {
						value: item.quantity.toString(), // Convertir a string
						label: 'Cantidad de medicamentos entregados',
					},
					createdAt: {
						value: format(new Date(item.createdAt), 'DD/MM/YYYY'),
						label: 'Fecha de entrega',
					},
					pharmacyName: {
						value: item.pharmacy.name,
						label: 'Nombre de la farmacia',
					},
					pharmacyAddress: {
						value: `${item.pharmacy.state}, ${item.pharmacy.municipality}, ${item.pharmacy.address}`,
						label: 'Dirección de la farmacia',
					},
					medicament: {
						value: item.medicament.name,
						label: 'Nombre del medicamento',
					},
				};
			}) || [];

		return {
			deliveryNumber: {
				value: deliveryNumber.toString(),
				label: 'Número de entregas',
			},
			deliveryData: {
				title: 'Datos de entregas',
				data: deliveryMap,
			},
		};
	};

	return {
		uid: data?.uid,
		section: 'medicationRequest',
		title: 'Solicitud de medicamento',
		dataLabel: {
			code: {
				value: data?.code,
				label: 'Código',
			},
			delivery_status: {
				value: data?.delivery_status,
				label: 'Estado de entrega',
			},
			...(data?.msg
				? {
						msg: {
							value: data.msg,
							label: 'Mensaje',
						},
					}
				: {}),
			updatedAt: {
				value: deliveryDate ? format(deliveryDate, 'DD/MM/YYYY') : null,
				label: 'Fecha de próxima entrega',
			},
			...deliveryData(),
			photo_recipe: {
				value: data?.photo_recipe,
				label: 'Foto de la recipe',
			},
			photo_medical_report: {
				value: data?.photo_medical_report,
				label: 'Foto del informe médico',
			},
			date_of_medical_report: {
				value:
					data?.date_of_medical_report &&
					format(new Date(data.date_of_medical_report), 'DD/MM/YYYY'),
				label: 'Fecha del informe médico',
			},
		},
	};
};
