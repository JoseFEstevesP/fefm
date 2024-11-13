import { z } from 'zod';
import { YN } from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const RegisterEconomicDTOSchema = z.object({
	monthly_income: z.string().regex(/^Bs\.\s?\d+(?:[,.]?\d{3})*(?:[,.]?\d+)?$/, {
		message: system.registerEconomicDTO.monthly_income.invalidFormat,
	}),

	receives_help_from_a_relative_or_friend: z.nativeEnum(YN, {
		message:
			system.registerEconomicDTO.receives_help_from_a_relative_or_friend
				.invalidOption,
	}),

	ingreso_carnet_subsidio: z.nativeEnum(YN, {
		message: system.registerEconomicDTO.ingreso_carnet_subsidio.invalidOption,
	}),

	average_monthly_fixed_expenses: z
		.string()
		.regex(/^Bs\.\s?\d+(?:[,.]?\d{3})*(?:[,.]?\d+)?$/, {
			message:
				system.registerEconomicDTO.average_monthly_fixed_expenses.invalidFormat,
		}),

	average_monthly_variable_expenses: z
		.string()
		.regex(/^Bs\.\s?\d+(?:[,.]?\d{3})*(?:[,.]?\d+)?$/, {
			message:
				system.registerEconomicDTO.average_monthly_variable_expenses
					.invalidFormat,
		}),
});

export type RegisterEconomicDTOSchemaType = z.infer<
	typeof RegisterEconomicDTOSchema
>;
