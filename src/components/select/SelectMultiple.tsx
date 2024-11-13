import { useEffect, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { Icons } from '../icon/Icons';
import { renderErrorMessage } from '../input/renderErrorMessage';
import './selectMultiple.scss';
import { MultiSelectProps, Option } from './selectMultipleTypes';

const SelectMultiple = ({
	name,
	control,
	label,
	placeholder = 'Seleccione la opción...',
	options,
	error,
	className,
	required = false,
}: MultiSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState('');
	const dropdownRef = useRef<HTMLDivElement>(null);

	const {
		field: { value, onChange },
	} = useController({
		name,
		control,
		rules: { required },
	});

	const selectedValues = Array.isArray(value) ? value : [];

	const filteredOptions = options.filter(option =>
		option.label.toLowerCase().includes(search.toLowerCase()),
	);

	const handleOptionClick = (option: Option) => {
		const newValue = selectedValues.includes(option.value)
			? selectedValues.filter(v => v !== option.value)
			: [...selectedValues, option.value];
		onChange(newValue);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className={`select ${className}`} ref={dropdownRef}>
			{label && (
				<label className='select__label'>
					{label}
					{required && <span>*</span>}
				</label>
			)}

			<button
				type='button'
				onClick={() => setIsOpen(!isOpen)}
				className={`select__contentValue ${error && 'select__contentValue--error'}`}
				aria-haspopup='listbox'
				aria-expanded={isOpen}
				aria-labelledby={name}
			>
				{selectedValues.length > 0 ? (
					<div className='select__value'>
						{selectedValues.map(val => {
							const option = options.find(opt => opt.value === val);
							return option ? <span key={val}>{option.label}, </span> : null;
						})}
					</div>
				) : (
					<div className='select__value select__value--placeholder'>
						<span>{placeholder}</span>
					</div>
				)}
				<div className='select__contentIcon'>
					<Icons
						className={`select__iconSelect ${isOpen && 'select__iconSelect--active'}`}
						iconName={'arrow'}
					/>
				</div>
			</button>

			{isOpen && (
				<div role='listbox' className='select__contentData'>
					<div className='select__search'>
						<input
							type='text'
							value={search}
							onChange={e => setSearch(e.target.value)}
							placeholder='Search options...'
							className='select__searchInput'
							aria-label='Search options'
						/>
						<div className='select__contentIcon'>
							<Icons iconName='search' className='select__icon' />
						</div>
					</div>

					<ul className='select__contentMenu' role='list'>
						{filteredOptions.length > 0 ? (
							filteredOptions.map(option => (
								<li
									tabIndex={0}
									key={option.value}
									onClick={() => handleOptionClick(option)}
									onKeyDown={event =>
										event.key === 'Enter' && handleOptionClick(option)
									}
									className='select__menuOptions'
									role='option'
									aria-selected={selectedValues.includes(option.value)}
								>
									<span>{option.label}</span>
									<div className='select__contentIcon'>
										<Icons
											iconName={`${selectedValues.includes(option.value) ? 'checkOn' : 'checkOff'}`}
											className='select__icon'
										/>
									</div>
								</li>
							))
						) : (
							<li
								className='select__menuOptions'
								role='option'
								aria-disabled='true'
							>
								<span>No se encontraron resultados</span>
							</li>
						)}
					</ul>
				</div>
			)}

			{error && (
				<p className='select__error'>{renderErrorMessage(error?.message)}</p>
			)}
		</div>
	);
};

export default SelectMultiple;
