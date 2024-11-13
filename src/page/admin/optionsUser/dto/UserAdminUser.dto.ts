import { z } from 'zod';
import { NationalityEnum, SexEnum } from '../../../../enum/data';
import { system } from '../../../../systemText';

export const UserAdminUserDTOSchema = z.object({
	v_e: z.nativeEnum(NationalityEnum, {
		message: system.userAdminUserDTO.v_e,
	}),

	ci: z
		.string()
		.min(6, system.userAdminUserDTO.ci.minLength)
		.max(8, system.userAdminUserDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.userAdminUserDTO.ci.invalidCharacters,
		}),

	first_name: z
		.string()
		.regex(/^[a-zA-Z\s]+$/, {
			message: system.userAdminUserDTO.first_name.invalidCharacters,
		})
		.min(3, system.userAdminUserDTO.first_name.minLength)
		.max(255, system.userAdminUserDTO.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-Z\s]+$/, {
			message: system.userAdminUserDTO.middle_name.invalidCharacters,
		})
		.min(3, system.userAdminUserDTO.middle_name.minLength)
		.max(255, system.userAdminUserDTO.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-Z\s]+$/, {
			message: system.userAdminUserDTO.first_surname.invalidCharacters,
		})
		.min(3, system.userAdminUserDTO.first_surname.minLength)
		.max(255, system.userAdminUserDTO.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-Z\s]+$/, {
			message: system.userAdminUserDTO.last_surname.invalidCharacters,
		})
		.min(3, system.userAdminUserDTO.last_surname.minLength)
		.max(255, system.userAdminUserDTO.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: system.userAdminUserDTO.sex,
	}),

	email: z
		.string()
		.email({ message: system.userAdminUserDTO.email.invalidEmail }),

	phone: z
		.string()
		.regex(/^(?:\+58|58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/, {
			message: system.userAdminUserDTO.phone.invalidFormat,
		}),

	password: z
		.string()
		.min(8, system.userAdminUserDTO.password.minLength)
		.max(20, system.userAdminUserDTO.password.maxLength)
		.regex(/[A-Z]/, { message: system.userAdminUserDTO.password.uppercase })
		.regex(/[a-z]/, { message: system.userAdminUserDTO.password.lowercase })
		.regex(/\d/, { message: system.userAdminUserDTO.password.number })
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
			message: system.userAdminUserDTO.password.symbol,
		}),

	uidRol: z.string().optional(),
});

export type UserAdminDTOSchemaType = z.infer<typeof UserAdminUserDTOSchema>;
