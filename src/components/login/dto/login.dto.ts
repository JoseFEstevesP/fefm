import { z } from 'zod';
import { system } from '../../../systemText';

export const LoginDTOSchema = z.object({
	ci: z
		.string()
		.min(6, system.loginDTO.ci.minLength)
		.max(8, system.loginDTO.ci.maxLength),

	password: z
		.string()
		.min(8, system.loginDTO.password.minLength)
		.max(20, system.loginDTO.password.maxLength)
		.regex(/[A-Z]/, system.loginDTO.password.uppercase)
		.regex(/[a-z]/, system.loginDTO.password.lowercase)
		.regex(/\d/, system.loginDTO.password.number)
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, system.loginDTO.password.symbol),
});

export type LoginDTOSchemaType = z.infer<typeof LoginDTOSchema>;
