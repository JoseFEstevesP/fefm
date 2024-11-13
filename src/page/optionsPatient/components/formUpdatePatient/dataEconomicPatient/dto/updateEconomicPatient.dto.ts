import { z } from 'zod';
import { YN } from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const UpdateEconomicDTOSchema = z.object({
	monthly_income: z.string().regex(/^Bs\.\s?\d+(?:[,.]?\d{3})*(?:[,.]?\d+)?$/, {
		message: system.updateEconomicDTO.monthly_income.invalidFormat,
	}),

	receives_help_from_a_relative_or_friend: z.nativeEnum(YN, {
		message:
			system.updateEconomicDTO.receives_help_from_a_relative_or_friend
				.invalidOption,
	}),

	ingreso_carnet_subsidio: z.nativeEnum(YN, {
		message: system.updateEconomicDTO.ingreso_carnet_subsidio.invalidOption,
	}),

	average_monthly_fixed_expenses: z
		.string()
		.regex(/^Bs\.\s?\d+(?:[,.]?\d{3})*(?:[,.]?\d+)?$/, {
			message:
				system.updateEconomicDTO.average_monthly_fixed_expenses.invalidFormat,
		}),

	average_monthly_variable_expenses: z
		.string()
		.regex(/^Bs\.\s?\d+(?:[,.]?\d{3})*(?:[,.]?\d+)?$/, {
			message:
				system.updateEconomicDTO.average_monthly_variable_expenses
					.invalidFormat,
		}),
});

export type UpdateEconomicDTOSchemaType = z.infer<
	typeof UpdateEconomicDTOSchema
>;
