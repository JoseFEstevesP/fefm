import { useCallback, useState } from 'react';
import useModal from '../components/modal/hooks/useModal';

const useModalImg = () => {
	const { handleOpen, handleClose, isOpen } = useModal({});
	const [urlModal, setUrlModal] = useState<string | null>(null);
	const handleImageModal = useCallback(
		data => {
			setUrlModal(data.target.currentSrc);
			handleOpen();
		},
		[handleOpen],
	);
	return { handleClose, isOpen, urlModal, handleImageModal };
};
export default useModalImg;
