import { useCallback, useEffect, useState } from 'react';
import { Btn } from '../../../../../components/button/Btn';

const Checkbox = ({
	value,
	title,
	onClick,
	checked = false,
	disabled = false,
}) => {
	const [check, setCheck] = useState(checked);

	useEffect(() => {
		setCheck(checked);
	}, [checked]);

	const handleCheck = useCallback(() => {
		onClick(value);
		setCheck(!check);
	}, [check, onClick, value]);

	return (
		<>
			<Btn
				title={`checkbox ${title}`}
				handleClick={handleCheck}
				text={title}
				type='button'
				disabled={disabled}
				nameIcon={check ? 'checkOn' : 'checkOff'}
			/>
		</>
	);
};
export default Checkbox;
