import {
	Table as MuTable,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { Btn } from '../button/Btn';
import { TableProps } from './tableProps';

export const Table = ({
	head,
	body,
	actionDelete = false,
	actionUpdate = false,
	className,
	handelAction,
}: TableProps) => {
	return (
		<TableContainer
			component={Paper}
			className={`${className}`}
			sx={{
				'&.css-11xur9t-MuiPaper-root-MuiTableContainer-root': {
					boxShadow: 'none',
				},
			}}
		>
			<MuTable aria-label='simple table'>
				<TableHead>
					<TableRow>
						{head.map(item => (
							<TableCell
								style={{ textAlign: 'center' }}
								key={crypto.randomUUID()}
							>
								{item.label}
							</TableCell>
						))}
						{(actionDelete || actionUpdate) && <TableCell>Action</TableCell>}
					</TableRow>
				</TableHead>
				<TableBody>
					{body?.map((item, index) => (
						<TableRow
							key={index}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}
						>
							{head.map(itemHead => (
								<TableCell
									style={{ textAlign: 'center' }}
									key={crypto.randomUUID()}
								>
									{item && typeof item[itemHead.value] === 'string'
										? item[itemHead.value]
										: item && item[itemHead.value]}
								</TableCell>
							))}
							{(actionDelete || actionUpdate) && (
								<TableCell style={{ textAlign: 'center' }} align='right'>
									<Btn
										title='Botón de acción'
										nameIcon='interrogant'
										CN={{
											className: 'table__btn',
											classIconName: 'table__icon',
										}}
										handleClick={() => handelAction(item)}
									/>
								</TableCell>
							)}
						</TableRow>
					))}
				</TableBody>
			</MuTable>
		</TableContainer>
	);
};
