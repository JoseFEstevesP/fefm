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

export const UpdateHousingExDTOSchema = z.object({
	main_mat_house: z.nativeEnum(RoofMaterial, {
		message: system.updateHousingExDTO.main_mat_house,
	}),

	floor_mat: z.nativeEnum(FloorMaterial, {
		message: system.updateHousingExDTO.floor_mat,
	}),

	num_rooms: z.nativeEnum(NumberOfRooms, {
		message: system.updateHousingExDTO.num_rooms,
	}),

	elec_light: z.nativeEnum(YN, {
		message: system.updateHousingExDTO.elec_light,
	}),

	water_source: z.nativeEnum(WaterSupply, {
		message: system.updateHousingExDTO.water_source,
	}),

	bathroom_type: z.nativeEnum(BathroomType, {
		message: system.updateHousingExDTO.bathroom_type,
	}),

	appliances: z
		.array(z.string(), {
			message: system.updateHousingExDTO.appliances.required,
		})
		.min(1, {
			message: system.updateHousingExDTO.appliances.required,
		}),

	cooking_fuel: z.nativeEnum(CookingFuel, {
		message: system.updateHousingExDTO.cooking_fuel,
	}),
});

export type UpdateHousingExDTOSchemaType = z.infer<
	typeof UpdateHousingExDTOSchema
>;
