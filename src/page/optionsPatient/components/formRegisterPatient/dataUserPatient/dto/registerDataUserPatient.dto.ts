import { z } from 'zod';
import {
	GradeOfStudy,
	MaritalStatus,
	NationalityEnum,
	Occupation,
	PatientEnum,
	SexEnum,
	YN,
} from '../../../../../../enum/data';

const validationMessages = {
	patient: 'Solo acepta los valores "Propio" o "Tercero".',
	v_e: 'Solo acepta los valores "V" o "E".',
	ci: {
		minLength: 'La cédula debe tener al menos 6 caracteres.',
		maxLength: 'La cédula no puede tener más de 8 caracteres.',
		invalidFormat: 'La cédula solo puede contener números.',
	},
	first_name: {
		invalidFormat: 'El nombre solo puede contener letras (A-Z, a-z) y acentos.',
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
};

export const RegisterDataUserDTOSchema = z.object({
	patient: z.nativeEnum(PatientEnum, {
		message: validationMessages.patient,
	}),

	v_e: z.nativeEnum(NationalityEnum, {
		message: validationMessages.v_e,
	}),

	ci: z
		.string()
		.min(6, validationMessages.ci.minLength)
		.max(8, validationMessages.ci.maxLength)
		.regex(/^\d+$/, {
			message: validationMessages.ci.invalidFormat,
		}),

	first_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: validationMessages.first_name.invalidFormat,
		})
		.min(3, validationMessages.first_name.minLength)
		.max(255, validationMessages.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: validationMessages.middle_name.invalidFormat,
		})
		.min(3, validationMessages.middle_name.minLength)
		.max(255, validationMessages.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: validationMessages.first_surname.invalidFormat,
		})
		.min(3, validationMessages.first_surname.minLength)
		.max(255, validationMessages.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: validationMessages.last_surname.invalidFormat,
		})
		.min(3, validationMessages.last_surname.minLength)
		.max(255, validationMessages.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: validationMessages.sex,
	}),

	email: z.string().email({
		message: validationMessages.email.invalidFormat,
	}),

	phone: z
		.string()
		.regex(/^(?:\+58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/, {
			message: validationMessages.phone.invalidFormat,
		}),

	place_of_birth: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: validationMessages.place_of_birth.invalidFormat,
	}),

	date_of_birth: z.string().refine(value => !isNaN(Date.parse(value)), {
		message: validationMessages.date_of_birth.invalidFormat,
	}),

	grade_of_study: z.nativeEnum(GradeOfStudy, {
		message: validationMessages.grade_of_study,
	}),

	marital_status: z.nativeEnum(MaritalStatus, {
		message: validationMessages.marital_status,
	}),

	children: z.nativeEnum(YN, {
		message: validationMessages.children,
	}),

	number_of_children: z.string().optional().default(''),

	occupation: z.nativeEnum(Occupation, {
		message: validationMessages.occupation,
	}),
});

export type RegisterDataUserDTOSchemaType = z.infer<
	typeof RegisterDataUserDTOSchema
>;
