import { InputProps } from './inputProps';

const InputSingle = ({
	type,
	placeholder,
	className,
	register,
	name,
}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`input__input ${className}`}
			{...register(name)}
		/>
	);
};
export default InputSingle;
