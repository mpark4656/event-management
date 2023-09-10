import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import {
	TablePagination,
	tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

export const TableWrapper = styled(Table)`
	background-color: var(--dynamic-bg-color);
	.sortable-header {
		display: flex;
		gap: 1em;
		align-items: center;
		cursor: pointer;
	}
	.btn-group {
		display: flex;
		gap: 1em;
	}
	button {
		border: none;
		padding: 0.5em 1em;
		border-radius: 50px;
		color: var(--white);
		cursor: pointer;
	}
	.btn-primary {
		background-color: #3B71CA;
	}
	.btn-warning {
		background-color: #E4A11B;
	}
	.btn-danger {
		background-color: #DC4C64;
	}
	.btn-primary:hover {
		background-color: #2657a5;
	}
	.btn-warning:hover {
		background-color: #b87e0a;
	}
	.btn-danger:hover {
		background-color: #be354c;
	}
`;

export const TableCellWrapper = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: 'var(--primary-400)',
		color: theme.palette.common.white,
		fontWeight: 600
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		color: 'var(--dynamic-text-color)'
	}
}));

export const TableFooterWrapper = styled(TableFooter)`
	background-color: var(--primary-900);
`;

const PaginationTableWrapper = styled(TablePagination)`
	padding: 0.5em 1em;
	color: var(--white);
	& .${classes.toolbar} {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		@media (min-width: 768px) {
			flex-direction: row;
			align-items: center;
		}
	}
	& .${classes.selectLabel} {
		margin: 0;
	}
	& .${classes.select}{
		padding: 0.25em 1em;
		border-radius: 50px;
		background-color: var(--white);
		color: var(--black);
		font-size: 1em;
		&:hover {
			background-color: var(--grey-200);
			cursor: pointer;
		}
		&:focus {
			background-color: var(--white);
		}
	}
	& .${classes.displayedRows} {
		margin: 0;
		@media (min-width: 768px) {
			margin-left: auto;
		}
	}
	& .${classes.spacer} {
		display: none;
	}
	& .${classes.actions} {
		display: flex;
		gap: 0.5rem;
	}
	& .${classes.actions} > button {
		padding: 0.25em 1em;
		font-size: 1em;
		color: var(--black);
		font-weight: 700;
	}
`;

export default PaginationTableWrapper;