import { z } from 'zod';
import {
	HousingOwnership,
	HousingType,
	Municipality,
	Parish,
	PhysicalConditionOfTheHouse,
	State,
	YN,
} from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const RegisterHousingDTOSchema = z.object({
	you_are_head_of_household: z.nativeEnum(YN, {
		message: system.registerHousingDTO.you_are_head_of_household,
	}),

	city: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.registerHousingDTO.city.invalidFormat,
	}),

	state: z.nativeEnum(State, {
		message: system.registerHousingDTO.state,
	}),

	municipality: z.nativeEnum(Municipality, {
		message: system.registerHousingDTO.municipality,
	}),

	parish: z.nativeEnum(Parish, {
		message: system.registerHousingDTO.parish,
	}),

	address: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/, {
		message: system.registerHousingDTO.address.invalidFormat,
	}),

	physical_condition_of_the_house: z.nativeEnum(PhysicalConditionOfTheHouse, {
		message: system.registerHousingDTO.physical_condition_of_the_house,
	}),

	type_of_dwelling: z.nativeEnum(HousingType, {
		message: system.registerHousingDTO.type_of_dwelling,
	}),

	dwelling_is: z.nativeEnum(HousingOwnership, {
		message: system.registerHousingDTO.dwelling_is,
	}),

	how_many_spaces_in_the_home: z.string().regex(/^\d+$/, {
		message:
			system.registerHousingDTO.how_many_spaces_in_the_home.invalidFormat,
	}),

	main_phone_number: z
		.string()
		.regex(/^(?:\+58|58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/, {
			message: system.registerHousingDTO.main_phone_number.invalidFormat,
		}),

	otherPhoneNumber: z
		.string()
		.refine(
			value =>
				value === '' ||
				/^(?:\+58|58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/.test(
					value,
				),
			{
				message: system.registerHousingDTO.otherPhoneNumber.invalidFormat,
			},
		)
		.optional(),
});

export type RegisterHousingDTOSchemaType = z.infer<
	typeof RegisterHousingDTOSchema
>;
