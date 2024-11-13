import { z } from 'zod';
import { system } from '../../../systemText';

export const RecoveryPassPasswordDTOSchema = z
	.object({
		newPassword: z
			.string()
			.min(8, { message: system.userAdminUserDTO.password.minLength })
			.max(20, { message: system.userAdminUserDTO.password.maxLength })
			.regex(/[A-Z]/, { message: system.userAdminUserDTO.password.uppercase })
			.regex(/[a-z]/, { message: system.userAdminUserDTO.password.lowercase })
			.regex(/\d/, { message: system.userAdminUserDTO.password.number })
			.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
				message: system.userAdminUserDTO.password.symbol,
			}),
		confirmPassword: z.string(),
	})
	.superRefine((data, ctx) => {
		if (data.confirmPassword !== data.newPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['confirmPassword'],
				message: 'Las contraseñas no coinciden.',
			});
		}
	});

export type RecoveryPassPasswordDTOSchemaType = z.infer<
	typeof RecoveryPassPasswordDTOSchema
>;
