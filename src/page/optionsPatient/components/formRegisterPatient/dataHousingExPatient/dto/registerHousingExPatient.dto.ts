import { z } from 'zod';
import {
	BathroomType,
	CookingFuel,
	FloorMaterial,
	NumberOfRooms,
	RoofMaterial,
	WaterSupply,
	YN,
} from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const RegisterHousingExDTOSchema = z.object({
	main_mat_house: z.nativeEnum(RoofMaterial, {
		message: system.registerHousingExDTO.main_mat_house,
	}),

	floor_mat: z.nativeEnum(FloorMaterial, {
		message: system.registerHousingExDTO.floor_mat,
	}),

	num_rooms: z.nativeEnum(NumberOfRooms, {
		message: system.registerHousingExDTO.num_rooms,
	}),

	elec_light: z.nativeEnum(YN, {
		message: system.registerHousingExDTO.elec_light,
	}),

	water_source: z.nativeEnum(WaterSupply, {
		message: system.registerHousingExDTO.water_source,
	}),

	bathroom_type: z.nativeEnum(BathroomType, {
		message: system.registerHousingExDTO.bathroom_type,
	}),

	appliances: z
		.array(z.string(), {
			message: system.registerHousingExDTO.appliances.required,
		})
		.min(1, { message: system.registerHousingExDTO.appliances.minItems }),

	cooking_fuel: z.nativeEnum(CookingFuel, {
		message: system.registerHousingExDTO.cooking_fuel,
	}),
});

export type RegisterHousingExDTOSchemaType = z.infer<
	typeof RegisterHousingExDTOSchema
>;
