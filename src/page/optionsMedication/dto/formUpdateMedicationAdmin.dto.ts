import { z } from 'zod';
import { system } from '../../../systemText';

export const UpdateMedicationAdminDTOSchema = z.object({
	quantity: z.string().min(1, system.updateMedicationAdmin.quantity.required),

	delivery_status: z
		.string()
		.min(1, system.updateMedicationAdmin.delivery_status.required),

	msg: z.string().optional().default(''),

	uidPharmacy: z.string().optional(),
});

export type UpdateMedicationAdminDTOSchemaType = z.infer<
	typeof UpdateMedicationAdminDTOSchema
>;
