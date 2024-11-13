import React from 'react';

export interface ModalProps {
	className?: string;
	children: React.ReactNode;
	isOpen: boolean;
	handleClose: () => void;
}
