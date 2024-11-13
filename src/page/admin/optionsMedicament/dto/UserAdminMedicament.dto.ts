import { z } from 'zod';
import { system } from '../../../../systemText';

export const UserAdminMedicamentDTOSchema = z.object({
	name: z
		.string()
		.min(1, system.userAdminMedicamentDTO.name.required)
		.max(255, system.userAdminMedicamentDTO.name.maxLength),

	description: z
		.string()
		.min(1, system.userAdminMedicamentDTO.description.required)
		.max(100, system.userAdminMedicamentDTO.description.maxLength),
});

export type UserAdminMedicamentDTOSchemaType = z.infer<
	typeof UserAdminMedicamentDTOSchema
>;
