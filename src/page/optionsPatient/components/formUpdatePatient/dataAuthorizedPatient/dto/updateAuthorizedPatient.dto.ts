import { z } from 'zod';
import {
	FamilyRelationship,
	NationalityEnum,
	SexEnum,
} from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const UpdateAuthorizedDTOSchema = z.object({
	persons_data: z.boolean().refine(value => value, {
		message: system.updateAuthorizedDTO.persons_data.required,
	}),

	v_e: z.nativeEnum(NationalityEnum, {
		message: system.updateAuthorizedDTO.v_e,
	}),

	ci: z
		.string()
		.min(6, system.updateAuthorizedDTO.ci.minLength)
		.max(8, system.updateAuthorizedDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.updateAuthorizedDTO.ci.invalidFormat,
		}),

	first_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateAuthorizedDTO.first_name.invalidFormat,
		})
		.min(3, system.updateAuthorizedDTO.first_name.minLength)
		.max(255, system.updateAuthorizedDTO.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateAuthorizedDTO.middle_name.invalidFormat,
		})
		.min(3, system.updateAuthorizedDTO.middle_name.minLength)
		.max(255, system.updateAuthorizedDTO.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateAuthorizedDTO.first_surname.invalidFormat,
		})
		.min(3, system.updateAuthorizedDTO.first_surname.minLength)
		.max(255, system.updateAuthorizedDTO.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
			message: system.updateAuthorizedDTO.last_surname.invalidFormat,
		})
		.min(3, system.updateAuthorizedDTO.last_surname.minLength)
		.max(255, system.updateAuthorizedDTO.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: system.updateAuthorizedDTO.sex,
	}),

	family_relationship: z.nativeEnum(FamilyRelationship, {
		message: system.updateAuthorizedDTO.family_relationship,
	}),
});

export type UpdateAuthorizedDTOSchemaType = z.infer<
	typeof UpdateAuthorizedDTOSchema
>;
