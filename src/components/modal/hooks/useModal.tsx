import { useCallback, useEffect, useState } from 'react';

const useModal = ({ initState = false }: { initState?: boolean }) => {
	const [isOpen, setIsOpen] = useState(initState);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = 'auto';
		}
	}, [isOpen]);
	return { isOpen, handleOpen, handleClose, setIsOpen };
};
export default useModal;
