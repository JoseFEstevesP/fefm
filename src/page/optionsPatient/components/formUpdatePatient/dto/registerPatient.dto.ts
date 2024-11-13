import { z } from 'zod';
import { NationalityEnum, SexEnum } from '../../../../../enum/data';
import { system } from '../../../../../systemText';

export const RegisterPatientDTOSchema = z.object({
	v_e: z.nativeEnum(NationalityEnum, {
		message: system.registerPatientDTO.v_e,
	}),

	ci: z
		.string()
		.min(6, system.registerPatientDTO.ci.minLength)
		.max(8, system.registerPatientDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.registerPatientDTO.ci.invalidFormat,
		}),

	first_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerPatientDTO.first_name.invalidFormat,
		})
		.min(3, system.registerPatientDTO.first_name.minLength)
		.max(255, system.registerPatientDTO.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerPatientDTO.middle_name.invalidFormat,
		})
		.min(3, system.registerPatientDTO.middle_name.minLength)
		.max(255, system.registerPatientDTO.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerPatientDTO.first_surname.invalidFormat,
		})
		.min(3, system.registerPatientDTO.first_surname.minLength)
		.max(255, system.registerPatientDTO.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerPatientDTO.last_surname.invalidFormat,
		})
		.min(3, system.registerPatientDTO.last_surname.minLength)
		.max(255, system.registerPatientDTO.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: system.registerPatientDTO.sex,
	}),

	email: z.string().email({
		message: system.registerPatientDTO.email.invalidFormat,
	}),

	phone: z
		.string()
		.regex(/^(?:\+58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/, {
			message: system.registerPatientDTO.phone.invalidFormat,
		}),

	password: z
		.string()
		.min(8, system.registerPatientDTO.password.minLength)
		.max(20, system.registerPatientDTO.password.maxLength)
		.regex(/[A-Z]/, { message: system.registerPatientDTO.password.uppercase })
		.regex(/[a-z]/, { message: system.registerPatientDTO.password.lowercase })
		.regex(/\d/, { message: system.registerPatientDTO.password.number })
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
			message: system.registerPatientDTO.password.symbol,
		}),
});

export type RegisterDTOSchemaType = z.infer<typeof RegisterPatientDTOSchema>;
