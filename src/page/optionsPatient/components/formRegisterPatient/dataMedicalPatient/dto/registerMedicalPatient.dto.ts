import { z } from 'zod';
import { Disability, HealthCareSafetyPlan } from '../../../../../../enum/data';
import { system } from '../../../../../../systemText';

export const RegisterMedicalDTOSchema = z.object({
	medical_disability: z.nativeEnum(Disability, {
		message: system.registerMedicalDTO.medical_disability,
	}),

	health_care_safety_plan: z.nativeEnum(HealthCareSafetyPlan, {
		message: system.registerMedicalDTO.health_care_safety_plan,
	}),

	name_of_health_care_facility: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message:
			system.registerMedicalDTO.name_of_health_care_facility.invalidFormat,
	}),

	medical_specialty: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.registerMedicalDTO.medical_specialty.invalidFormat,
	}),

	treating_physician_name: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
		message: system.registerMedicalDTO.treating_physician_name.invalidFormat,
	}),

	uidPathology: z.string().nonempty({
		message: system.registerMedicalDTO.uidPathology,
	}),

	uidMedicament: z.string().nonempty({
		message: system.registerMedicalDTO.uidMedicament,
	}),

	daily_dosage: z.string().regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/, {
		message: system.registerMedicalDTO.daily_dosage.invalidFormat,
	}),
});

export type RegisterMedicalDTOSchemaType = z.infer<
	typeof RegisterMedicalDTOSchema
>;
