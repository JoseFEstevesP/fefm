const repText = 'Ingrese su';
const repTextRol = 'Ingrese';
export const system = {
	code: {
		recovery: 'Ingrese el código de recuperación',
		activate: 'Ingrese el código de activación',
	},
	btn: 'Enviar',
	btnPatients: 'Siguiente',
	btnPatientsUpdate: 'Actualizar',
	recoveryPassword: 'Recuperar contraseña',
	register: 'Registrarse',
	login: 'Iniciar sesión',
	description: 'Descripcion del medicamento',
	medicaments: 'Ingrese el medicamento',
	pharmacyAddress: 'Dirección de la farmacia',
	pathologyDescription: 'Descripción de la patologia ',
	pharmacyName: 'Nombre de la farmacia',
	pathologyName: 'Nombre de la patologia',
	msg: 'Mensaje para el usuario',
	pharmacy: `Asigne la farmacia`,
	rolName: `${repTextRol} nombre de rol`,
	rolType: `${repTextRol} tipo de rol`,
	rolPermissions: `${repTextRol} permisos`,
	date_of_medical_report: 'Fecha de informe medico',
	v_e: `${repText} nacionalidad`,
	ci: `${repText} cédula`,
	quantity: `cantidad de medicamento`,
	photo_recipe: `Foto récipe`,
	photo_medical_report: `Foto informe medico`,
	first_name: `${repText} primer nombre`,
	middle_name: `${repText} segundo nombre`,
	first_surname: `${repText} primer apellido`,
	last_surname: `${repText} segundo apellido`,
	sex: `${repText} sexo`,
	rol: `Ingrese el rol del usuario`,
	email: `${repText} correo electrónico`,
	phone: `${repText} número de teléfono`,
	password: `${repText} contraseña`,
	patient: `${repText} tipo de paciente`,
	housing_you_are_head_of_household: `¿Usted es jefe de familia?`,
	place_of_birth: `${repText} lugar de nacimiento`,
	date_of_birth: `${repText} fecha de nacimiento`,
	grade_of_study: `${repText} grado de estudio`,
	marital_status: `${repText} estado civil`,
	children: `¿Tiene hijos?`,
	number_of_children: `${repText} cantidad de hijos`,
	occupation: `${repText} ocupación`,
	housing_city: `${repText} ciudad`,
	housing_state: `${repText} estado`,
	housing_municipality: `${repText} municipio`,
	housing_parish: `${repText} parroquia`,
	housing_address: `${repText} dirección completa`,
	housing_physical_condition_of_the_house: `Estado físico de la vivienda`,
	housing_type_of_dwelling: `Tipo de vivienda`,
	housing_dwelling_is: '¿La vivienda es?',
	housing_how_many_spaces_in_the_home: '¿Cuántos espacios tiene la vivienda?',
	housing_main_phone_number: 'Teléfono principal',
	housing_otherPhoneNumber: 'Otro número de teléfono',
	housingEx_main_mat_house: 'Material predominante de la vivienda',
	housingEx_floor_mat: 'Material predominante en el piso de la vivienda',
	housingEx_num_rooms: '¿Cuántas habitaciones tiene la vivienda?',
	housingEx_elec_light: '¿La vivienda posee luz eléctrica?',
	housingEx_water_source: '¿La vivienda cuenta con agua por?',
	housingEx_bathroom_type: '¿La vivienda tiene baño con?',
	housingEx_appliances: '¿La vivienda dispone de artefactos como?',
	housingEx_cooking_fuel: 'Tipo de combustible para cocinar',
	family_reside_in_housing: '¿Cuántas personas residen en la vivienda?',
	family_inhabit_5_18:
		'¿Cuántas personas entre 5 y 18 años habitan la vivienda?',
	family_contribute_expenses:
		'¿Cuántas personas aportan para los gastos de la vivienda?',
	family_work_housing: '¿Cuántos integrantes de la vivienda trabajan?',
	medical_disability:
		'¿Tiene alguna de las siguientes condiciones o discapacidad?',
	medical_health_care_safety_plan:
		'¿Tiene algún plan de seguridad de atención médica?',
	medical_name_of_health_care_facility:
		'Nombre del centro de salud donde recibe atención médica',
	medical_medical_specialty: 'Especialidad del médico tratante',
	medical_treating_physician_name: 'Nombre del médico tratante',
	medical_pathology: 'Indique la patologí médica',
	medical_medication: 'Nombre del medicamento',
	medical_daily_dosage: 'Dosificación diaria',
	economic_monthly_income: 'Indique su ingreso mensual',
	economic_receives_help_from_a_relative_or_friend:
		'¿Recibe ayuda de algún pariente o amigo?',
	economic_ingreso_carnet_subsidio:
		'¿Percibe ingresos por carnet de la patria u otro mecanismo de subsidio?',
	economic_average_monthly_fixed_expenses: 'Promedio mensual de gastos fijos',
	economic_average_monthly_variable_expenses:
		'Promedio mensual de gastos variables',
	authorized_v_e: `${repText} nacionalidad`,
	delivery_status: `Estatus de la solicitud`,
	authorized_ci: `${repText} cédula`,
	authorized_first_name: `${repText} primer nombre`,
	authorized_middle_name: `${repText} segundo nombre`,
	authorized_first_surname: `${repText} primer apellido`,
	authorized_last_surname: `${repText} segundo apellido`,
	authorized_sex: `${repText} sexo`,
	authorized_family_relationship: 'Parentesco con el familiar',

	userAdminPathologyDTO: {
		name: {
			required: 'El nombre es obligatorio',
			maxLength: 'Máximo de 255 caracteres',
		},
		description: {
			required: 'La descripción es obligatoria',
			maxLength: 'Máximo de 255 caracteres',
		},
		medicaments: {
			required: 'Los medicamentos son requeridos',
			minItems: 'Los medicamentos deben ser al menos 1',
		},
	},
	registerHousingExDTO: {
		main_mat_house: 'Selecciona un material de techo aceptado.',
		floor_mat: 'Selecciona un material de piso aceptado.',
		num_rooms: 'Selecciona un número de habitaciones aceptado.',
		elec_light: 'Seleccione una opción válida.',
		water_source: 'Selecciona una fuente de agua aceptada.',
		bathroom_type: 'Selecciona un tipo de baño aceptado.',
		appliances: {
			required: 'Los electrodomésticos son requeridos.',
			minItems: 'Los electrodomésticos deben ser al menos 1.',
		},
		cooking_fuel: 'Selecciona un tipo de combustible de cocina aceptado.',
	},
	loginDTO: {
		ci: {
			minLength: 'Mínimo de 6 caracteres',
			maxLength: 'Máximo de 8 caracteres',
		},
		password: {
			minLength: 'La contraseña debe tener al menos 8 caracteres',
			maxLength: 'La contraseña debe tener como máximo 20 caracteres',
			uppercase: 'La contraseña debe tener al menos una letra mayúscula',
			lowercase: 'La contraseña debe tener al menos una letra minúscula',
			number: 'La contraseña debe tener al menos un número',
			symbol: 'La contraseña debe tener al menos un símbolo',
		},
	},
	userAdminMedicamentDTO: {
		name: {
			required: 'El nombre es obligatorio',
			maxLength: 'Máximo de 255 caracteres',
		},
		description: {
			required: 'La descripción es obligatoria',
			maxLength: 'Máximo de 100 caracteres',
		},
	},
	userAdminPharmacyDTO: {
		name: {
			required: 'El nombre es obligatorio',
			maxLength: 'Máximo de 255 caracteres',
		},
		address: {
			required: 'La dirección es obligatoria',
			maxLength: 'Máximo de 255 caracteres',
		},
		state: {
			required: 'El estado es obligatorio',
			maxLength: 'Máximo de 100 caracteres',
		},
		municipality: {
			required: 'El municipio es obligatorio',
			maxLength: 'Máximo de 100 caracteres',
		},
	},
	userAdminRolDTO: {
		name: {
			minLength: 'Mínimo de 6 caracteres',
			maxLength: 'Máximo de 8 caracteres',
		},
		typeRol: 'Parámetros no válidos, solo se acepta administrador o usuario',
		permissions: {
			required: 'Tiene que ser un array de permisos',
		},
	},
	userAdminUserDTO: {
		v_e: 'Parámetros no válidos, solo se acepta V o E',
		ci: {
			minLength: 'Mínimo de 6 caracteres',
			maxLength: 'Máximo de 8 caracteres',
			invalidCharacters: 'Caracteres no validos, solo se acepta números',
		},
		first_name: {
			invalidCharacters: 'Caracteres no válidos, solo se acepta de la A a la Z',
			minLength: 'Mínimo de 3 caracteres',
			maxLength: 'Máximo de 255 caracteres',
		},
		middle_name: {
			invalidCharacters: 'Caracteres no válidos, solo se acepta de la A a la Z',
			minLength: 'Mínimo de 3 caracteres',
			maxLength: 'Máximo de 255 caracteres',
		},
		first_surname: {
			invalidCharacters: 'Caracteres no válidos, solo se acepta de la A a la Z',
			minLength: 'Mínimo de 3 caracteres',
			maxLength: 'Máximo de 255 caracteres',
		},
		last_surname: {
			invalidCharacters: 'Caracteres no válidos, solo se acepta de la A a la Z',
			minLength: 'Mínimo de 3 caracteres',
			maxLength: 'Máximo de 255 caracteres',
		},
		sex: 'Parámetros no válidos, solo se acepta femenino o masculino',
		email: {
			invalidEmail: 'El correo debe ser un correo válido',
		},
		phone: {
			invalidFormat: `El número de teléfono ingresado no es válido.
Asegúrate de que el número tenga el formato correcto:
- Debe comenzar con el código de país (+58 o 58).
- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
- Debe tener un total de 11 dígitos.
Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
		password: {
			minLength: 'La contraseña debe tener al menos 8 caracteres',
			maxLength: 'La contraseña debe tener como máximo 20 caracteres',
			uppercase: 'La contraseña debe tener al menos una letra mayúscula',
			lowercase: 'La contraseña debe tener al menos una letra minúscula',
			number: 'La contraseña debe tener al menos un número',
			symbol: 'La contraseña debe tener al menos un símbolo',
		},
	},
	activateCountDTO: {
		code: {
			minLength: 'Mínimo de 13 caracteres',
			maxLength: 'Máximo de 16 caracteres',
			invalidCharacters: 'Caracteres no validos, solo se acepta números',
		},
	},
	registerMedicationDTO: {
		ci: {
			minLength: 'La cédula debe tener al menos 6 caracteres',
			maxLength: 'La cédula no puede tener más de 8 caracteres',
			invalidFormat: 'La cédula solo puede contener números',
		},
		photo_recipe: {
			maxSize: 'El tamaño máximo de la imagen es de 5MB.',
			invalidFormat: 'Solo se aceptan formatos .jpg, .jpeg, .png y .webp.',
		},
		photo_medical_report: {
			maxSize: 'El tamaño máximo de la imagen es de 5MB.',
			invalidFormat: 'Solo se aceptan formatos .jpg, .jpeg, .png y .webp.',
		},
		date_of_medical_report: {
			invalidDate: 'La fecha del informe médico no es válida',
		},
	},
	updateMedicationAdmin: {
		quantity: {
			required: 'La cantidad es obligatoria.',
		},
		delivery_status: {
			required: 'El estado de entrega es obligatorio.',
		},
	},
	registerAuthorizedDTO: {
		persons_data: {
			required: 'Los datos de la persona son obligatorios.',
		},
		v_e: 'Selecciona "V" o "E" para indicar la nacionalidad.',
		ci: {
			minLength: 'La cédula debe tener un mínimo de 6 caracteres.',
			maxLength: 'La cédula no puede tener más de 8 caracteres.',
			invalidFormat: 'La cédula debe contener solo números.',
		},
		first_name: {
			invalidFormat:
				'El primer nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer nombre debe tener un mínimo de 3 caracteres.',
			maxLength: 'El primer nombre no puede tener más de 255 caracteres.',
		},
		middle_name: {
			invalidFormat:
				'El segundo nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo nombre debe tener un mínimo de 3 caracteres.',
			maxLength: 'El segundo nombre no puede tener más de 255 caracteres.',
		},
		first_surname: {
			invalidFormat:
				'El primer apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer apellido debe tener un mínimo de 3 caracteres.',
			maxLength: 'El primer apellido no puede tener más de 255 caracteres.',
		},
		last_surname: {
			invalidFormat:
				'El segundo apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo apellido debe tener un mínimo de 3 caracteres.',
			maxLength: 'El segundo apellido no puede tener más de 255 caracteres.',
		},
		sex: 'Selecciona "femenino" o "masculino".',
		family_relationship: 'Selecciona una relación familiar aceptada.',
	},
	registerEconomicDTO: {
		monthly_income: {
			invalidFormat:
				'El ingreso mensual solo puede seguir la estructura Bs. 100,00; Bs. 1.000,00.',
		},
		receives_help_from_a_relative_or_friend: {
			invalidOption: 'Seleccione una opción válida.',
		},
		ingreso_carnet_subsidio: {
			invalidOption: 'Seleccione una opción válida.',
		},
		average_monthly_fixed_expenses: {
			invalidFormat:
				'Los gastos fijos mensuales promedio solo pueden seguir la estructura Bs. 100,00; Bs. 1.000,00.',
		},
		average_monthly_variable_expenses: {
			invalidFormat:
				'Los gastos variables mensuales promedio solo pueden seguir la estructura Bs. 100,00; Bs. 1.000,00.',
		},
	},
	registerFamilyDTO: {
		reside_in_housing: {
			invalidFormat:
				'El número de personas que residen en la vivienda debe ser un dato numérico.',
		},
		inhabit_5_18: {
			invalidFormat:
				'El número de personas entre 5 y 18 años que habitan la vivienda debe ser un dato numérico.',
		},
		contribute_expenses: {
			invalidFormat:
				'El número de personas que contribuyen a los gastos de la vivienda debe ser un dato numérico.',
		},
		work_housing: {
			invalidFormat:
				'El número de personas que trabajan en la vivienda debe ser un dato numérico.',
		},
	},
	registerHousingDTO: {
		you_are_head_of_household: 'Acepta solo "Sí" o "No".',
		city: {
			invalidFormat:
				'El nombre de la ciudad solo puede contener letras (A-Z, a-z) y acentos.',
		},
		state: 'Seleccione un estado válido.',
		municipality: 'Seleccione un municipio válido.',
		parish: 'Seleccione parroquia válida.',
		address: {
			invalidFormat:
				'La dirección solo puede contener letras (A-Z, a-z) y acentos.',
		},
		physical_condition_of_the_house:
			'Seleccione estado físico de la vivienda válido.',
		type_of_dwelling: 'Seleccione tipo de vivienda válido.',
		dwelling_is: 'Seleccione una opción válida.',
		how_many_spaces_in_the_home: {
			invalidFormat:
				'El número de espacios en la vivienda debe ser un dato numérico.',
		},
		main_phone_number: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
		otherPhoneNumber: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
	},
	registerMedicalDTO: {
		medical_disability: 'Selecciona una discapacidad aceptada.',
		health_care_safety_plan:
			'Selecciona un plan de seguridad de atención médica aceptado.',
		name_of_health_care_facility: {
			invalidFormat:
				'El nombre de la instalación de atención médica solo puede contener letras (A-Z, a-z) y acentos.',
		},
		medical_specialty: {
			invalidFormat:
				'La especialidad médica solo puede contener letras (A-Z, a-z) y acentos.',
		},
		treating_physician_name: {
			invalidFormat:
				'El nombre del médico tratante solo puede contener letras (A-Z, a-z) y acentos.',
		},
		uidPathology: 'El identificador de la patología es obligatorio.',
		uidMedicament: 'El identificador del medicamento es obligatorio.',
		daily_dosage: {
			invalidFormat:
				'La dosis diaria solo puede contener letras (A-Z, a-z), números y acentos.',
		},
	},
	registerDataUserDTO: {
		patient: 'Solo acepta los valores "Propio" o "Tercero".',
		v_e: 'Solo acepta los valores "V" o "E".',
		ci: {
			minLength: 'La cédula debe tener al menos 6 caracteres.',
			maxLength: 'La cédula no puede tener más de 8 caracteres.',
			invalidFormat: 'La cédula solo puede contener números.',
		},
		first_name: {
			invalidFormat:
				'El nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El nombre debe tener al menos 3 caracteres.',
			maxLength: 'El nombre no puede tener más de 255 caracteres.',
		},
		middle_name: {
			invalidFormat:
				'El segundo nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo nombre debe tener al menos 3 caracteres.',
			maxLength: 'El segundo nombre no puede tener más de 255 caracteres.',
		},
		first_surname: {
			invalidFormat:
				'El primer apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer apellido debe tener al menos 3 caracteres.',
			maxLength: 'El primer apellido no puede tener más de 255 caracteres.',
		},
		last_surname: {
			invalidFormat:
				'El segundo apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo apellido debe tener al menos 3 caracteres.',
			maxLength: 'El segundo apellido no puede tener más de 255 caracteres.',
		},
		sex: 'Solo acepta los valores "femenino" o "masculino".',
		email: {
			invalidFormat: 'El correo electrónico debe tener un formato válido.',
		},
		phone: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
		place_of_birth: {
			invalidFormat:
				'El lugar de nacimiento solo puede contener letras (A-Z, a-z) y acentos.',
		},
		date_of_birth: {
			invalidFormat: 'La fecha de nacimiento no es válida.',
		},
		grade_of_study: 'Seleccione un grado de estudio válido.',
		marital_status: 'Seleccione un estado civil válido.',
		children: 'Seleccione una opción válida.',
		number_of_children: {
			optionalMessage: 'Número de hijos opcional.',
		},
		occupation: 'Seleccione una ocupación válida.',
	},
	updateAuthorizedDTO: {
		persons_data: {
			required: 'Los datos de la persona son obligatorios.',
		},
		v_e: 'Selecciona "V" o "E" para indicar la nacionalidad.',
		ci: {
			minLength: 'La cédula debe tener un mínimo de 6 caracteres.',
			maxLength: 'La cédula no puede tener más de 8 caracteres.',
			invalidFormat: 'La cédula debe contener solo números.',
		},
		first_name: {
			invalidFormat:
				'El primer nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer nombre debe tener un mínimo de 3 caracteres.',
			maxLength: 'El primer nombre no puede tener más de 255 caracteres.',
		},
		middle_name: {
			invalidFormat:
				'El segundo nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo nombre debe tener un mínimo de 3 caracteres.',
			maxLength: 'El segundo nombre no puede tener más de 255 caracteres.',
		},
		first_surname: {
			invalidFormat:
				'El primer apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer apellido debe tener un mínimo de 3 caracteres.',
			maxLength: 'El primer apellido no puede tener más de 255 caracteres.',
		},
		last_surname: {
			invalidFormat:
				'El segundo apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo apellido debe tener un mínimo de 3 caracteres.',
			maxLength: 'El segundo apellido no puede tener más de 255 caracteres.',
		},
		sex: 'Selecciona "femenino" o "masculino".',
		family_relationship: 'Selecciona una relación familiar aceptada.',
	},
	updateEconomicDTO: {
		monthly_income: {
			invalidFormat:
				'El ingreso mensual solo puede seguir la estructura Bs. 100,00; Bs. 1.000,00.',
		},
		receives_help_from_a_relative_or_friend: {
			invalidOption: 'Seleccione una opción válida.',
		},
		ingreso_carnet_subsidio: {
			invalidOption: 'Seleccione una opción válida.',
		},
		average_monthly_fixed_expenses: {
			invalidFormat:
				'Los gastos fijos mensuales promedio solo pueden seguir la estructura Bs. 100,00; Bs. 1.000,00.',
		},
		average_monthly_variable_expenses: {
			invalidFormat:
				'Los gastos variables mensuales promedio solo pueden seguir la estructura Bs. 100,00; Bs. 1.000,00.',
		},
	},
	updateFamilyDTO: {
		reside_in_housing: {
			invalidFormat:
				'El número de personas que residen en la vivienda debe ser un dato numérico.',
		},
		inhabit_5_18: {
			invalidFormat:
				'El número de personas entre 5 y 18 años que habitan la vivienda debe ser un dato numérico.',
		},
		contribute_expenses: {
			invalidFormat:
				'El número de personas que contribuyen a los gastos de la vivienda debe ser un dato numérico.',
		},
		work_housing: {
			invalidFormat:
				'El número de personas que trabajan en la vivienda debe ser un dato numérico.',
		},
	},
	updateHousingExDTO: {
		main_mat_house: 'Selecciona un material de techo aceptado.',
		floor_mat: 'Selecciona un material de piso aceptado.',
		num_rooms: 'Selecciona un número de habitaciones aceptado.',
		elec_light: 'Seleccione una opción válida.',
		water_source: 'Selecciona una fuente de agua aceptada.',
		bathroom_type: 'Selecciona un tipo de baño aceptado.',
		appliances: {
			required:
				'Los electrodomésticos son requeridos y deben ser al menos uno.',
		},
		cooking_fuel: 'Selecciona un tipo de combustible de cocina aceptado.',
	},
	updateHousingDTO: {
		you_are_head_of_household: 'Acepta solo "Sí" o "No".',
		city: {
			invalidFormat:
				'El nombre de la ciudad solo puede contener letras (A-Z, a-z) y acentos.',
		},
		state: 'Seleccione un estado válido.',
		municipality: 'Seleccione un municipio válido.',
		parish: 'Seleccione una parroquia válida.',
		address: {
			invalidFormat:
				'La dirección solo puede contener letras (A-Z, a-z) y acentos.',
		},
		physical_condition_of_the_house:
			'Seleccione un estado físico de la vivienda válido.',
		type_of_dwelling: 'Seleccione un tipo de vivienda válido.',
		dwelling_is: 'Seleccione una opción válida.',
		how_many_spaces_in_the_home: {
			invalidFormat:
				'El número de espacios en la vivienda debe ser un dato numérico.',
		},
		main_phone_number: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
		otherPhoneNumber: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
	},
	updateMedicalDTO: {
		medical_disability: 'Selecciona una discapacidad aceptada.',
		health_care_safety_plan:
			'Selecciona un plan de seguridad de atención médica aceptado.',
		name_of_health_care_facility: {
			invalidFormat:
				'El nombre de la instalación de atención médica solo puede contener letras (A-Z, a-z) y acentos.',
		},
		medical_specialty: {
			invalidFormat:
				'La especialidad médica solo puede contener letras (A-Z, a-z) y acentos.',
		},
		treating_physician_name: {
			invalidFormat:
				'El nombre del médico tratante solo puede contener letras (A-Z, a-z) y acentos.',
		},
		uidPathology: 'El identificador de la patología es obligatorio.',
		uidMedicament: 'El identificador del medicamento es obligatorio.',
		daily_dosage: {
			invalidFormat:
				'La dosis diaria solo puede contener letras (A-Z, a-z), números y acentos.',
		},
	},
	updateDataUserDTO: {
		v_e: 'Solo acepta los valores "V" o "E".',
		ci: {
			minLength: 'La cédula debe tener al menos 6 caracteres.',
			maxLength: 'La cédula no puede tener más de 8 caracteres.',
			invalidFormat: 'La cédula solo puede contener números.',
		},
		first_name: {
			invalidFormat:
				'El nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El nombre debe tener al menos 3 caracteres.',
			maxLength: 'El nombre no puede tener más de 255 caracteres.',
		},
		middle_name: {
			invalidFormat:
				'El segundo nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo nombre debe tener al menos 3 caracteres.',
			maxLength: 'El segundo nombre no puede tener más de 255 caracteres.',
		},
		first_surname: {
			invalidFormat:
				'El primer apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer apellido debe tener al menos 3 caracteres.',
			maxLength: 'El primer apellido no puede tener más de 255 caracteres.',
		},
		last_surname: {
			invalidFormat:
				'El segundo apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo apellido debe tener al menos 3 caracteres.',
			maxLength: 'El segundo apellido no puede tener más de 255 caracteres.',
		},
		sex: 'Solo acepta los valores "femenino" o "masculino".',
		email: {
			invalidFormat: 'El correo electrónico debe tener un formato válido.',
		},
		phone: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
		place_of_birth: {
			invalidFormat:
				'El lugar de nacimiento solo puede contener letras (A-Z, a-z) y acentos.',
		},
		date_of_birth: {
			invalidFormat: 'La fecha de nacimiento no es válida.',
		},
		grade_of_study: 'Seleccione un grado de estudio válido.',
		marital_status: 'Seleccione un estado civil válido.',
		children: 'Seleccione una opción válida.',
		number_of_children: {
			optionalMessage: 'Número de hijos opcional.',
		},
		occupation: 'Seleccione una ocupación válida.',
	},
	registerPatientDTO: {
		v_e: 'Parámetros no válidos, solo se acepta "V" o "E".',
		ci: {
			minLength: 'La cédula debe tener al menos 6 caracteres.',
			maxLength: 'La cédula no puede tener más de 8 caracteres.',
			invalidFormat: 'La cédula solo puede contener números.',
		},
		first_name: {
			invalidFormat:
				'El nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El nombre debe tener al menos 3 caracteres.',
			maxLength: 'El nombre no puede tener más de 255 caracteres.',
		},
		middle_name: {
			invalidFormat:
				'El segundo nombre solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo nombre debe tener al menos 3 caracteres.',
			maxLength: 'El segundo nombre no puede tener más de 255 caracteres.',
		},
		first_surname: {
			invalidFormat:
				'El primer apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El primer apellido debe tener al menos 3 caracteres.',
			maxLength: 'El primer apellido no puede tener más de 255 caracteres.',
		},
		last_surname: {
			invalidFormat:
				'El segundo apellido solo puede contener letras (A-Z, a-z) y acentos.',
			minLength: 'El segundo apellido debe tener al menos 3 caracteres.',
			maxLength: 'El segundo apellido no puede tener más de 255 caracteres.',
		},
		sex: 'Parámetros no válidos, solo se acepta "femenino" o "masculino".',
		email: {
			invalidFormat: 'El correo electrónico debe tener un formato válido.',
		},
		phone: {
			invalidFormat: `El número de teléfono ingresado no es válido. Asegúrate de que el número tenga el formato correcto:
	- Debe comenzar con el código de país (+58 o 58).
	- Debe incluir un código de área de 3 dígitos (por ejemplo, 212, 414).
	- Debe tener un total de 11 dígitos.
	Ejemplo de un número válido: +582412345678 o 0412345678.`,
		},
		password: {
			minLength: 'La contraseña debe tener al menos 8 caracteres.',
			maxLength: 'La contraseña debe tener como máximo 20 caracteres.',
			uppercase: 'La contraseña debe tener al menos una letra mayúscula.',
			lowercase: 'La contraseña debe tener al menos una letra minúscula.',
			number: 'La contraseña debe tener al menos un número.',
			symbol: 'La contraseña debe tener al menos un símbolo.',
		},
	},
	recoveryPasswordDTO: {
		email: {
			invalidFormat: 'El correo electrónico debe tener un formato válido.',
		},
		code: {
			min: 'El código tiene un minimo de 7 caracteres',
			max: 'El código tiene un maximo de 7 caracteres',
		},
	},
};
