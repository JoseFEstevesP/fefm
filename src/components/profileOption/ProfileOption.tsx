import { memo, useCallback, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextToken } from '../../context/token/TokenContext';
import { Btn } from '../button/Btn';
import { Icons } from '../icon/Icons';
import './profileOption.scss';

export const ProfileOption = memo(() => {
	const [openMenu, setOpenMenu] = useState<null | HTMLUListElement>(null);
	const { setToken } = useContext(ContextToken);
	const handleClick = useCallback(() => {
		openMenu?.classList.toggle('profileOption__menu--active');
	}, [openMenu?.classList]);

	const handleExit = useCallback(() => {
		setToken(null);
		sessionStorage.removeItem('jwt');
	}, [setToken]);
	return (
		<section className='profileOption'>
			<Btn
				title='opción del perfil'
				nameIcon='user'
				CN={{
					className: 'profileOption__btnUser',
					classIconName: 'profileOption__icon',
				}}
				handleClick={handleClick}
			/>
			<ul className='profileOption__menu' ref={setOpenMenu}>
				<li className='profileOption__item'>
					<NavLink
						to={''}
						className={({ isActive }) =>
							`${isActive ? 'profileOption__link--active' : null} profileOption__link`
						}
						end
					>
						<Icons iconName='user' className='profileOption__icon' />
					</NavLink>
				</li>
				<li className='profileOption__item'>
					<Btn
						title='boton de exit'
						nameIcon='exit'
						CN={{
							className: 'profileOption__btnExit',
							classIconName: 'profileOption__icon',
						}}
						handleClick={handleExit}
					/>
				</li>
			</ul>
		</section>
	);
});
