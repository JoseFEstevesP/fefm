import { Btn } from '../button/Btn';
import './input.scss';
import { SearchProps } from './inputProps';
import InputSingle from './InputSingle';

export const Search = ({
	className,
	placeholder = 'Buscar...',
	register,
}: SearchProps) => {
	return (
		<>
			<div className={`input ${className}`}>
				<div className={`input__style input__style--search`}>
					<InputSingle
						name={'search'}
						placeholder={placeholder}
						type={'search'}
						register={register}
					/>
					<Btn
						title='botom para buscar'
						nameIcon='search'
						CN={{
							className: 'input__btnSearch',
							classIconName: 'input__IconSearch',
						}}
						type='submit'
					/>
				</div>
			</div>
		</>
	);
};
