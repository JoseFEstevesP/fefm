import { FormControl, InputLabel, TextField } from '@mui/material';
import './input.scss';
import { InputProps } from './inputProps';
import { renderErrorMessage } from './renderErrorMessage';

export const Input = ({
	name,
	placeholder,
	error,
	className,
	type = 'text',
	register,
	label,
	disabled = false,
}: InputProps) => {
	return (
		<>
			<FormControl className={className}>
				<InputLabel
					htmlFor={name}
					shrink
					style={{ color: 'red', fontSize: '1.5em' }}
				>
					{label}
				</InputLabel>

				<TextField
					placeholder={placeholder}
					type={type}
					{...register(name)}
					error={!!error}
					helperText={renderErrorMessage(error?.message)}
					disabled={disabled}
				/>
			</FormControl>
		</>
	);
};
