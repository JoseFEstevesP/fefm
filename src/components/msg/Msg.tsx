import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useCallback, useContext, useEffect } from 'react';
import { ContextMsg } from '../../context/msg/MsgContext';
import './msg.scss';

const Msg = () => {
	const { msg, setMsg } = useContext(ContextMsg);
	const handleClose = useCallback(() => {
		setMsg(null);
	}, [setMsg]);

	useEffect(() => {
		if (msg) {
			const timer = setTimeout(() => {
				setMsg(null);
			}, 5000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [msg, setMsg]);

	return (
		<Snackbar open={Boolean(msg)} autoHideDuration={5000} onClose={handleClose}>
			<SnackbarContent
				message={msg}
				action={
					<IconButton
						size='small'
						aria-label='close'
						color='inherit'
						onClick={handleClose}
					>
						<CloseIcon fontSize='small' />
					</IconButton>
				}
				className='msg__content'
			/>
		</Snackbar>
	);
};

export default Msg;
