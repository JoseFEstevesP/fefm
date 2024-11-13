import { z } from 'zod';
import { system } from '../../../../systemText';
import { Permission, RolType } from '../enum/dataRol';

export const UserAdminRolDTOSchema = z.object({
	name: z
		.string()
		.min(6, system.userAdminRolDTO.name.minLength)
		.max(8, system.userAdminRolDTO.name.maxLength),

	typeRol: z.nativeEnum(RolType, {
		message: system.userAdminRolDTO.typeRol,
	}),

	permissions: z.array(z.nativeEnum(Permission), {
		message: system.userAdminRolDTO.permissions.required,
	}),
});

export type UserAdminRolDTOSchemaType = z.infer<typeof UserAdminRolDTOSchema>;
