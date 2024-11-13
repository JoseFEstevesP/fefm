import { Pagination as MUPagination } from '@mui/material';

const Pagination = ({ pages, currentPage, handleData }) => {
	return (
		<MUPagination
			count={pages}
			page={currentPage}
			shape='rounded'
			onChange={handleData}
			sx={{
				'& .MuiPaginationItem-root.Mui-selected': {
					background: 'rgba(18, 129, 189, 0.5)',
				},
			}}
		/>
	);
};
export default Pagination;
