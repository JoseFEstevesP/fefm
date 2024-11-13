import { z } from 'zod';
import { system } from '../../../systemText';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
];

export const RegisterMedicationDTOSchema = z.object({
	ci: z
		.string()
		.min(6, system.registerMedicationDTO.ci.minLength)
		.max(8, system.registerMedicationDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.registerMedicationDTO.ci.invalidFormat,
		}),

	photo_recipe: z
		.any()
		.refine(files => files?.[0]?.size <= MAX_FILE_SIZE, {
			message: system.registerMedicationDTO.photo_recipe.maxSize,
			path: ['photo_recipe'],
		})
		.refine(files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
			message: system.registerMedicationDTO.photo_recipe.invalidFormat,
			path: ['photo_recipe'],
		}),

	photo_medical_report: z
		.any()
		.refine(files => files?.[0]?.size <= MAX_FILE_SIZE, {
			message: system.registerMedicationDTO.photo_medical_report.maxSize,
			path: ['photo_medical_report'],
		})
		.refine(files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
			message: system.registerMedicationDTO.photo_medical_report.invalidFormat,
			path: ['photo_medical_report'],
		}),

	date_of_medical_report: z
		.string()
		.refine(value => !isNaN(Date.parse(value)), {
			message: system.registerMedicationDTO.date_of_medical_report.invalidDate,
		}),
});

export type RegisterMedicationDTOSchemaType = z.infer<
	typeof RegisterMedicationDTOSchema
>;
