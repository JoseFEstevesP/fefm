import { z } from 'zod';
import { system } from '../../../systemText';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
];

export const UpdateMedicationDTOSchema = z.object({
	ci: z
		.string()
		.min(6, system.registerMedicationDTO.ci.minLength)
		.max(8, system.registerMedicationDTO.ci.maxLength)
		.regex(/^\d+$/, {
			message: system.registerMedicationDTO.ci.invalidFormat,
		}),
	photo_recipe: z
		.any()
		.optional()
		.refine(
			files => !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE,
			{
				message: system.registerMedicationDTO.photo_recipe.maxSize,
				path: ['photo_recipe'],
			},
		)
		.refine(
			files =>
				!files ||
				files.length === 0 ||
				ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
			{
				message: system.registerMedicationDTO.photo_recipe.invalidFormat,
				path: ['photo_recipe'],
			},
		),
	photo_medical_report: z
		.any()
		.optional()
		.refine(
			files => !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE,
			{
				message: system.registerMedicationDTO.photo_medical_report.maxSize,
				path: ['photo_medical_report'],
			},
		)
		.refine(
			files =>
				!files ||
				files.length === 0 ||
				ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
			{
				message:
					system.registerMedicationDTO.photo_medical_report.invalidFormat,
				path: ['photo_medical_report'],
			},
		),
	date_of_medical_report: z
		.string()
		.date(system.registerMedicationDTO.date_of_medical_report.invalidDate),
});

export type UpdateMedicationDTOSchemaType = z.infer<
	typeof UpdateMedicationDTOSchema
>;
