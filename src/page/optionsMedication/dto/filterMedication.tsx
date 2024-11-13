import { z } from 'zod';
import { LimitFetchData, OrderEnum } from '../../../enum/data';
import { OrderMedicationRequestProperty } from '../enum/data';

export const FilterMedicationDTO = z.object({
	search: z.string().optional(),
	orderProperty: z
		.nativeEnum(OrderMedicationRequestProperty, {
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

export type FilterMedicationDTOType = z.infer<typeof FilterMedicationDTO>;
