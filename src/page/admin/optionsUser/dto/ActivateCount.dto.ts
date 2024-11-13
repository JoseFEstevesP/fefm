import { z } from 'zod';
import { system } from '../../../../systemText';

export const ActivateCountDTOSchema = z.object({
	code: z
		.string()
		.min(13, system.activateCountDTO.code.minLength)
		.max(16, system.activateCountDTO.code.maxLength)
		.regex(/^\d+$/, {
			message: system.activateCountDTO.code.invalidCharacters,
		}),
});

export type ActivateCountDTOSchemaType = z.infer<typeof ActivateCountDTOSchema>;
