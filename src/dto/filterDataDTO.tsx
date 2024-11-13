import { z } from 'zod';
import { LimitFetchData, OrderEnum } from '../enum/data';

export const FilterDataDTO = z.object({
	search: z.string().optional(),
	orderProperty: z.string().optional(),
	order: z
		.nativeEnum(OrderEnum, {
			message: 'Parametros no valido',
		})
		.optional(),
	limit: z
		.nativeEnum(LimitFetchData, {
			message: 'Parametros no valido',
		})
		.optional(),
});

export type FilterDataDTOType = z.infer<typeof FilterDataDTO>;
