import { z } from 'zod';
import {
	FamilyRelationship,
	NationalityEnum,
	SexEnum,
} from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const RegisterAuthorizedDTOSchema = z.object({
	persons_data: z.boolean().refine(value => value, {
		message: system.registerAuthorizedDTO.persons_data.required,
	}),

	v_e: z.nativeEnum(NationalityEnum, {
		message: system.registerAuthorizedDTO.v_e,
	}),

	ci: z
		.string()
		.min(6, system.registerAuthorizedDTO.ci.minLength)
		.max(8, system.registerAuthorizedDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.registerAuthorizedDTO.ci.invalidFormat,
		}),

	first_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerAuthorizedDTO.first_name.invalidFormat,
		})
		.min(3, system.registerAuthorizedDTO.first_name.minLength)
		.max(255, system.registerAuthorizedDTO.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerAuthorizedDTO.middle_name.invalidFormat,
		})
		.min(3, system.registerAuthorizedDTO.middle_name.minLength)
		.max(255, system.registerAuthorizedDTO.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerAuthorizedDTO.first_surname.invalidFormat,
		})
		.min(3, system.registerAuthorizedDTO.first_surname.minLength)
		.max(255, system.registerAuthorizedDTO.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.registerAuthorizedDTO.last_surname.invalidFormat,
		})
		.min(3, system.registerAuthorizedDTO.last_surname.minLength)
		.max(255, system.registerAuthorizedDTO.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: system.registerAuthorizedDTO.sex,
	}),

	family_relationship: z.nativeEnum(FamilyRelationship, {
		message: system.registerAuthorizedDTO.family_relationship,
	}),
});

export type RegisterAuthorizedDTOSchemaType = z.infer<
	typeof RegisterAuthorizedDTOSchema
>;
