import { z } from 'zod';
import { system } from '../../../../../../systemText';

export const UpdateFamilyDTOSchema = z.object({
	reside_in_housing: z.string().regex(/^\d+$/, {
		message: system.updateFamilyDTO.reside_in_housing.invalidFormat,
	}),

	inhabit_5_18: z.string().regex(/^\d+$/, {
		message: system.updateFamilyDTO.inhabit_5_18.invalidFormat,
	}),

	contribute_expenses: z.string().regex(/^\d+$/, {
		message: system.updateFamilyDTO.contribute_expenses.invalidFormat,
	}),

	work_housing: z.string().regex(/^\d+$/, {
		message: system.updateFamilyDTO.work_housing.invalidFormat,
	}),
});

export type UpdateFamilyDTOSchemaType = z.infer<typeof UpdateFamilyDTOSchema>;
