import { z } from 'zod';
import { system } from '../../../../systemText';

export const UserAdminPharmacyDTOSchema = z.object({
	name: z
		.string()
		.min(1, system.userAdminPharmacyDTO.name.required)
		.max(255, system.userAdminPharmacyDTO.name.maxLength),

	address: z
		.string()
		.min(1, system.userAdminPharmacyDTO.address.required)
		.max(255, system.userAdminPharmacyDTO.address.maxLength),

	state: z
		.string()
		.min(1, system.userAdminPharmacyDTO.state.required)
		.max(100, system.userAdminPharmacyDTO.state.maxLength),

	municipality: z
		.string()
		.min(1, system.userAdminPharmacyDTO.municipality.required)
		.max(100, system.userAdminPharmacyDTO.municipality.maxLength),
});

export type UserAdminPharmacyDTOSchemaType = z.infer<
	typeof UserAdminPharmacyDTOSchema
>;
