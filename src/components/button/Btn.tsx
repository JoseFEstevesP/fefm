import { Icons } from '../icon/Icons';
import './btn.scss';
import { BtnProps } from './btnProps';

export const Btn = ({
	CN = { className: '', classIconName: '' },
	disabled = false,
	handleClick,
	nameIcon,
	title,
	text,
	type = 'button',
}: BtnProps) => {
	return (
		<button
			title={title}
			type={type}
			className={`btn ${CN.className} ${disabled ? 'btn--disable' : ''}`}
			onClick={handleClick}
			disabled={disabled}
		>
			{text || ''}
			{nameIcon && (
				<Icons
					iconName={nameIcon}
					className={`btn__icon ${CN?.classIconName}`}
				/>
			)}
		</button>
	);
};
