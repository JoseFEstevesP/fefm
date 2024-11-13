import { memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileOption } from '../profileOption/ProfileOption';
import './menu.scss';
import { MenuProps } from './menuProps';

export const Menu = memo(({ data, className }: MenuProps) => {
	const [menu, setMenu] = useState<null | HTMLElement>(null);
	const handleBtn = useCallback(() => {
		menu?.classList.toggle('menu__content--show');
	}, [menu?.classList]);

	return (
		<section className={`menu ${className}`}>
			<>
				<div className='menu__contentBtn'>
					<button className='menu__btn' type='button' onClick={handleBtn}>
						<div className='menu__bar'></div>
					</button>
				</div>
				<nav className='menu__content' ref={setMenu}>
					<ul className='menu__menu box'>
						{data.map(item => (
							<li key={crypto.randomUUID()} className='menu__list'>
								<NavLink
									to={item.to}
									className={({ isActive }) =>
										`${isActive ? 'menu__link--active' : null} menu__link`
									}
									end
								>
									<b>{item.text}</b>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</>
			<ProfileOption />
		</section>
	);
});
