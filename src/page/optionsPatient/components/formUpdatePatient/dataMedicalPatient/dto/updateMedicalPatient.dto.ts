import { z } from 'zod';
import { Disability, HealthCareSafetyPlan } from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const UpdateMedicalDTOSchema = z.object({
	medical_disability: z.nativeEnum(Disability, {
		message: system.updateMedicalDTO.medical_disability,
	}),

	health_care_safety_plan: z.nativeEnum(HealthCareSafetyPlan, {
		message: system.updateMedicalDTO.health_care_safety_plan,
	}),

	name_of_health_care_facility: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.updateMedicalDTO.name_of_health_care_facility.invalidFormat,
	}),

	medical_specialty: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.updateMedicalDTO.medical_specialty.invalidFormat,
	}),

	treating_physician_name: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.updateMedicalDTO.treating_physician_name.invalidFormat,
	}),

	uidPathology: z.string().nonempty({
		message: system.updateMedicalDTO.uidPathology,
	}),

	uidMedicament: z.string().nonempty({
		message: system.updateMedicalDTO.uidMedicament,
	}),

	daily_dosage: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/, {
		message: system.updateMedicalDTO.daily_dosage.invalidFormat,
	}),
});

export type UpdateMedicalDTOSchemaType = z.infer<typeof UpdateMedicalDTOSchema>;
