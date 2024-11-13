import { z } from 'zod';
import { system } from '../../../../../../systemText';

export const RegisterFamilyDTOSchema = z.object({
	reside_in_housing: z.string().regex(/^\d+$/, {
		message: system.registerFamilyDTO.reside_in_housing.invalidFormat,
	}),

	inhabit_5_18: z.string().regex(/^\d+$/, {
		message: system.registerFamilyDTO.inhabit_5_18.invalidFormat,
	}),

	contribute_expenses: z.string().regex(/^\d+$/, {
		message: system.registerFamilyDTO.contribute_expenses.invalidFormat,
	}),

	work_housing: z.string().regex(/^\d+$/, {
		message: system.registerFamilyDTO.work_housing.invalidFormat,
	}),
});

export type RegisterFamilyDTOSchemaType = z.infer<
	typeof RegisterFamilyDTOSchema
>;
