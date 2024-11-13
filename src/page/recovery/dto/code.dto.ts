import { z } from 'zod';

export const RecoveryPassCodeDTOSchema = z.object({
	code: z
		.string()
		.length(7, { message: 'El código debe tener exactamente 7 caracteres.' })
		.regex(/^\d{7}$/, {
			message: 'El código debe ser numérico y contener solo dígitos.',
		}),
});

export type RecoveryPassCodeDTOSchemaType = z.infer<
	typeof RecoveryPassCodeDTOSchema
>;
