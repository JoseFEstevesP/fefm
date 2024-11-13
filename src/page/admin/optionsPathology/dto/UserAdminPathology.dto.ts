import { z } from 'zod';
import { system } from '../../../../systemText';

export const UserAdminPathologyDTOSchema = z.object({
	name: z
		.string()
		.min(1, system.userAdminPathologyDTO.name.required)
		.max(255, system.userAdminPathologyDTO.name.maxLength),

	description: z
		.string()
		.min(1, system.userAdminPathologyDTO.description.required)
		.max(255, system.userAdminPathologyDTO.description.maxLength),

	medicaments: z
		.array(z.string(), {
			message: system.userAdminPathologyDTO.medicaments.required,
		})
		.min(1, { message: system.userAdminPathologyDTO.medicaments.minItems }),
});

export type UserAdminPathologyDTOSchemaType = z.infer<
	typeof UserAdminPathologyDTOSchema
>;
