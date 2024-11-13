import { useCallback, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import useGet from '../../../../hooks/useGet';
import {
	MedicamentData,
	ObjectDataAddMedicament,
} from '../formRegisterPatient/formRegisterPatientTypes';

const usePM = control => {
	const { getData } = useGet();
	const [pathologies, setPathologies] = useState<ObjectDataAddMedicament[]>([]);
	const [medications, setMedications] = useState<MedicamentData[]>([]);
	const [loadingPathologies, setLoadingPathologies] = useState(true);

	const loadPathologies = useCallback(async () => {
		setLoadingPathologies(true);
		try {
			const res = await getData({ url: '/pathology/all' });
			setPathologies(res);
		} catch (err) {
			console.error('Error fetching pathologies:', err);
		} finally {
			setLoadingPathologies(false);
		}
	}, [getData]);

	useEffect(() => {
		loadPathologies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const value = useWatch({ control });

	useEffect(() => {
		if (value.uidPathology) {
			const selectedPathology = pathologies.find(
				item => item.value === value.uidPathology,
			);
			if (selectedPathology) {
				setMedications(selectedPathology.medicaments);
			}
		} else {
			setMedications([]);
		}
	}, [value.uidPathology, pathologies]);

	return {
		pathologies,
		medications,
		loadingPathologies,
	};
};
export default usePM;
