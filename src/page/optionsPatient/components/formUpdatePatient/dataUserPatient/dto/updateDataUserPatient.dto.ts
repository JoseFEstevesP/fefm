import { z } from 'zod';
import {
	GradeOfStudy,
	MaritalStatus,
	NationalityEnum,
	Occupation,
	SexEnum,
	YN,
} from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const UpdateDataUserDTOSchema = z.object({
	v_e: z.nativeEnum(NationalityEnum, {
		message: system.updateDataUserDTO.v_e,
	}),

	ci: z
		.string()
		.min(6, system.updateDataUserDTO.ci.minLength)
		.max(8, system.updateDataUserDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.updateDataUserDTO.ci.invalidFormat,
		}),

	first_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateDataUserDTO.first_name.invalidFormat,
		})
		.min(3, system.updateDataUserDTO.first_name.minLength)
		.max(255, system.updateDataUserDTO.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateDataUserDTO.middle_name.invalidFormat,
		})
		.min(3, system.updateDataUserDTO.middle_name.minLength)
		.max(255, system.updateDataUserDTO.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateDataUserDTO.first_surname.invalidFormat,
		})
		.min(3, system.updateDataUserDTO.first_surname.minLength)
		.max(255, system.updateDataUserDTO.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateDataUserDTO.last_surname.invalidFormat,
		})
		.min(3, system.updateDataUserDTO.last_surname.minLength)
		.max(255, system.updateDataUserDTO.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: system.updateDataUserDTO.sex,
	}),

	email: z.string().email({
		message: system.updateDataUserDTO.email.invalidFormat,
	}),

	phone: z
		.string()
		.regex(/^(?:\+58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/, {
			message: system.updateDataUserDTO.phone.invalidFormat,
		}),

	place_of_birth: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.updateDataUserDTO.place_of_birth.invalidFormat,
	}),

	date_of_birth: z.string().refine(value => !isNaN(Date.parse(value)), {
		message: system.updateDataUserDTO.date_of_birth.invalidFormat,
	}),

	grade_of_study: z.nativeEnum(GradeOfStudy, {
		message: system.updateDataUserDTO.grade_of_study,
	}),

	marital_status: z.nativeEnum(MaritalStatus, {
		message: system.updateDataUserDTO.marital_status,
	}),

	children: z.nativeEnum(YN, {
		message: system.updateDataUserDTO.children,
	}),

	number_of_children: z.string().optional().default(''), // Número de hijos opcional

	occupation: z.nativeEnum(Occupation, {
		message: system.updateDataUserDTO.occupation,
	}),
});

export type UpdateDataUserDTOSchemaType = z.infer<
	typeof UpdateDataUserDTOSchema
>;
