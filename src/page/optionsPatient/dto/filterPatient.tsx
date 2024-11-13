import { z } from 'zod';
import { LimitFetchData, OrderEnum } from '../../../enum/data';
import { OrderPatientsPropertyEnum } from '../enum/data';

export const FilterPatientDTO = z.object({
	search: z.string().optional(),
	orderProperty: z
		.nativeEnum(OrderPatientsPropertyEnum, {
			message: 'Parametros no valido',
		})
		.optional(),
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

export type FilterPatientDTOType = z.infer<typeof FilterPatientDTO>;
