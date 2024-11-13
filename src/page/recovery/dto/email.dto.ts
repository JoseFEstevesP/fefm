import { z } from 'zod';
import { system } from '../../../systemText';

export const RecoveryPassEmailDTOSchema = z.object({
	email: z
		.string()
		.email({ message: system.recoveryPasswordDTO.email.invalidFormat }),
});

export type RecoveryPassEmailDTOSchemaType = z.infer<
	typeof RecoveryPassEmailDTOSchema
>;
