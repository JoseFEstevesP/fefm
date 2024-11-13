import { useCallback, useContext } from 'react';
import { ContextRol } from '../context/rol/RolContext';
import { Permission } from '../page/admin/optionsRol/enum/dataRol';

const useValidate = () => {
	const { rol } = useContext(ContextRol);

	const handleData = useCallback(
		({ per }: { per: string }) => {
			return rol?.permissions.some(
				item => item === per || item === Permission.super,
			);
		},
		[rol],
	);

	const handleTypeRol = useCallback(
		({ typeRol }: { typeRol: string }) => {
			return rol?.typeRol === typeRol;
		},
		[rol],
	);

	return { handleData, handleName: handleTypeRol };
};
export default useValidate;
