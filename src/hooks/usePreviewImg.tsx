import { useCallback } from 'react';

const usePreviewImg = () => {
	const imagePreview = useCallback(({ value, seImg }) => {
		if (value instanceof FileList) {
			const objectUrl = URL.createObjectURL(value[0]);
			seImg(objectUrl);
		}
	}, []);

	return { imagePreview };
};
export default usePreviewImg;
