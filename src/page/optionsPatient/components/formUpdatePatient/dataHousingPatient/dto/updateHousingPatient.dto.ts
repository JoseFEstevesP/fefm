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

export const UpdateHousingDTOSchema = z.object({
	you_are_head_of_household: z.nativeEnum(YN, {
		message: system.updateHousingDTO.you_are_head_of_household,
	}),

	city: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.updateHousingDTO.city.invalidFormat,
	}),

	state: z.nativeEnum(State, {
		message: system.updateHousingDTO.state,
	}),

	municipality: z.nativeEnum(Municipality, {
		message: system.updateHousingDTO.municipality,
	}),

	parish: z.nativeEnum(Parish, {
		message: system.updateHousingDTO.parish,
	}),

	address: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/, {
		message: system.updateHousingDTO.address.invalidFormat,
	}),

	physical_condition_of_the_house: z.nativeEnum(PhysicalConditionOfTheHouse, {
		message: system.updateHousingDTO.physical_condition_of_the_house,
	}),

	type_of_dwelling: z.nativeEnum(HousingType, {
		message: system.updateHousingDTO.type_of_dwelling,
	}),

	dwelling_is: z.nativeEnum(HousingOwnership, {
		message: system.updateHousingDTO.dwelling_is,
	}),

	how_many_spaces_in_the_home: z.string().regex(/^\d+$/, {
		message: system.updateHousingDTO.how_many_spaces_in_the_home.invalidFormat,
	}),

	main_phone_number: z
		.string()
		.regex(/^(?:\+58|58|0)?(2[0-9]{2}|4[0-9]{2}|[5-9][0-9]{2})[0-9]{7}$/, {
			message: system.updateHousingDTO.main_phone_number.invalidFormat,
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
				message: system.updateHousingDTO.otherPhoneNumber.invalidFormat,
			},
		)
		.optional(),
});

export type UpdateHousingDTOSchemaType = z.infer<typeof UpdateHousingDTOSchema>;
