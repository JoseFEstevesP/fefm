import icon from './../../assets/icon.svg';
import { IconParameter } from './icon';
export const Icons = ({ className = '', iconName }: IconParameter) => {
	return (
		<svg role='img' className={`${className}`}>
			<use
				href={`${icon}#${iconName}`}
				style={{ width: 'auto', height: '100px' }}
			></use>
		</svg>
	);
};
