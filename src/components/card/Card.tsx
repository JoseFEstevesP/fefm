import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../icon/Icons';
import './card.scss';
import { CardProps } from './cardProps';

export const Card = memo(({ title, to, iconName, btnName }: CardProps) => {
	return (
		<section className='card box'>
			<h3 className='card__title'>{title}</h3>
			<div className='card__group'>
				<Icons iconName={iconName} className='card__icon' />
				<Link to={to} className='btn btn--card'>
					{btnName}
				</Link>
			</div>
		</section>
	);
});
