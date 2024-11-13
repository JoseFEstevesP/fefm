import { Btn } from '../button/Btn';
import './modal.scss';
import { ModalProps } from './modalProps';

const Modal = ({
	className = '',
	children,
	isOpen,
	handleClose,
}: ModalProps) => {
	return (
		<section className={`modal ${isOpen && 'modal--show'} ${className}`}>
			<div className={`modal__content box ${isOpen && 'modal__content--show'}`}>
				<Btn
					title='cerrar modal'
					nameIcon='close'
					CN={{ className: 'modal__btn', classIconName: 'modal__icon' }}
					handleClick={handleClose}
				/>
				{children}
			</div>
		</section>
	);
};
export default Modal;
