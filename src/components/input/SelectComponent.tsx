import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import './input.scss';
import { SelectProps } from './inputProps';
import { renderErrorMessage } from './renderErrorMessage';

export const SelectComponent = ({
	name,
	error,
	className,
	data,
	placeholder,
	control,
	defaultValue = '',
	variant = 'outlined',
	label,
	disabled = false,
}: SelectProps) => {
	return (
		<FormControl className={className} error={!!error}>
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				render={({ field }) => (
					<>
						<InputLabel
							htmlFor={`select-${name}`}
							shrink
							style={{ color: 'red', fontSize: '1.5em' }}
						>
							{label}
						</InputLabel>
						<Select
							{...field}
							displayEmpty
							variant={variant}
							id={`select-${name}`}
							disabled={disabled}
						>
							<MenuItem value='' disabled>
								{placeholder}
							</MenuItem>
							{data.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</>
				)}
			/>
			{error && (
				<FormHelperText>{renderErrorMessage(error.message)}</FormHelperText>
			)}
		</FormControl>
	);
};
