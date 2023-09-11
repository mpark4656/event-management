import PaginationTableWrapper, {
	TableWrapper,
	TableCellWrapper,
	TableFooterWrapper
} from '../../styled/components/dashboard/PaginationTableWrapper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
/**
 * This initialize all column sort states to Not Sorted.
 * A column sort state specifies if the column is currently sorted and if so
 * in which direction.
 * Only one column can be sorted at a time.
 * @param {*} headers Table column headers
 * @returns initialized column sort states
 */
const initColumnSortStates = (headers) => {
	const initSortStates = {};
	headers.forEach(header => {
		if(header.sortable) {
			initSortStates[header.field] = {
				sorted: false,
				direction: ''
			};
		}
	});
	return initSortStates;
};

const PaginationTable = ({ metadata, data, setData }) => {
	const [ page, setPage ] = useState(0);
	const [ rowsPerPage, setRowsPerPage ] = useState(metadata.rowsPerPageOptions[0]);
	const [ columnSortStates, setColumnSortStates] = useState(initColumnSortStates(metadata.headers));
	// A hidden field on the data record indicates if that record has been filtered out
	const filteredData = data.filter(obj => !obj._hidden);
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredData.length) : 0;
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const hadleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const sortColumn = (field) => {
		return (event) => {
			setColumnSortStates(states => {
				const currentState = states[field];
				const newSortStates = initColumnSortStates(metadata.headers);
				newSortStates[field].sorted = true;
				newSortStates[field].direction = 
					currentState.direction === '' || currentState.direction === 'descending'
					? 'ascending'
					: 'descending';
				return newSortStates;
			});
		}
	}
	const sortData = (field, direction) => {
		setData(objects => objects.toSorted((object1, object2) => {
			if(direction === 'ascending') 
				return object1[field] > object2[field] ? 1 : -1;
			if(direction === 'descending')
				return object1[field] < object2[field] ? 1 : -1;
		}));
	}
	// After column sort states are updated, sort the data
	useEffect(() => {
		for(const [key, value] of Object.entries(columnSortStates)) {
			if(value.sorted) {
				sortData(key, value.direction);
			}
		}
	}, [columnSortStates]);
	return (
		<TableContainer component={Paper}>
			<TableWrapper>
				<TableHead>
					<TableRow>
						{metadata.headers.map((header, index) => {
							return (
								<TableCellWrapper key={index}>
									{!header.sortable && header.label}
									{header.sortable &&
										<div className="sortable-header" onClick={sortColumn(header.field)}>
											{header.label}
											{columnSortStates[header.field].direction == '' &&
												<FaSort />
											}
											{columnSortStates[header.field].direction == 'ascending' &&
												<FaSortUp />
											}
											{columnSortStates[header.field].direction == 'descending' &&
												<FaSortDown />
											}
										</div>
									}
								</TableCellWrapper>
							);
						})}
						{ metadata.rowActions && <TableCellWrapper>Actions</TableCellWrapper> }
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredData.length == 0 &&
						<TableRow>
							<TableCellWrapper colSpan={metadata.headers.length + (metadata.rowActions ? 1 : 0)}>
								No records to display
							</TableCellWrapper>
						</TableRow>
					}
					{(rowsPerPage > 0
						? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: filteredData).map((object, objIndex) => {
							return (
								<TableRow key={objIndex}>
									{metadata.headers.map((header, headerIndex) => {
										const val = object[header.field];
										return (
											<TableCellWrapper key={headerIndex}>
												{header.customRender ? header.customRender(val) : val}
											</TableCellWrapper>
										);
									})}
									{ metadata.rowActions &&
										<TableCellWrapper>
											<div className="btn-group">
												{metadata.rowActions.map((action, actionIndex) => {
													return (
														<button key={actionIndex}
															type="button"
															className={action.className}
															data-target_id={object[action.idField]}
															onClick={action.func}>
															{action.label}
														</button>);
												})}
											</div>
										</TableCellWrapper>
									}
								</TableRow>
							)
						}
					)}
					{emptyRows > 0 && (
						<TableRow style={{ height: 60 * emptyRows }}>
							<TableCellWrapper colSpan={metadata.headers.length + (metadata.rowActions ? 1 : 0)} />
						</TableRow>
					)}
				</TableBody>
				<TableFooterWrapper>
					<TableRow>
						<PaginationTableWrapper
							rowsPerPageOptions={ metadata.rowsPerPageOptions }
							colSpan={metadata.headers.length + (metadata.rowActions ? 1 : 0)}
							count={filteredData.length}
							rowsPerPage={rowsPerPage}
							page={page}
							slotProps={{
								select: {
									'aria-label': 'rows per page'
								},
								actions: {
									showFirstButton: true,
									showLastButton: true
								}
							}}
							onPageChange={handleChangePage}
							onRowsPerPageChange={hadleChangeRowsPerPage}
						/>
					</TableRow>
				</TableFooterWrapper>
			</TableWrapper>
		</TableContainer>
	);
};

export default PaginationTable;