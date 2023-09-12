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
import { useState } from 'react';
/**
 * A table that supports pagination, filtering and sorting.
 * 
 * To filter any rows, add _hidden attribute to the corresponding data item and set it to false.
 * To sort, supply proper sortStates react state and sortData function.
 * 
 * @param {Object} props
 * {
 *		metadata: contains information about how the table should be structured
 *			{
 *				rowsPerPageOptions: [5, 10, 15],   // Rows per page options in the select element
 *				headers: [{
 *					label: 'Email',	// Header Label
 *					field: 'email'	// Corresponds to a field in the row data
 *					render: func	// An optional function to render the data field in a special way. i.e) All uppercase
 *				}],
 *				rowActions: [{		// Adds an extra column with buttons for performing certain actions for each row
 *					label: 'View',
 *					handler: func,	// A function that handles the click event on the button
 *					idField: '_id',	// A unique id for each data row. Usually the id of the data object.
 *									This id will be set as the value for data-row_object_id, which your handler can access.
 *					className: 'btn-primary'	// CSS class for styling the button
 *				}]
 *			}
 *		data: array of data objects that should be displayed in the rows
 *			[{
 *				_id: '1',
 *				email: 'value1',
 *				name: 'value2', ...
 *				_hidden: false | true	// Hides the row in the table if true. Used for filtering.
 *			}]
 *		sortStates: contains information about which column can be sorted and maintains the current sort direction
 *			[{
 *				field: 'field1',
 *				direction: '' | 'asc' | 'desc' 
 *			}]
 *		sortData: A handler for sorting the data. An ancestor component must implement this function
 * }
 */
const PaginationTable = ({ metadata, data, sortStates, sortData }) => {
	const [ page, setPage ] = useState(0);
	const [ rowsPerPage, setRowsPerPage ] = useState(metadata.rowsPerPageOptions[0]);
	
	// A hidden field on the data record indicates if that record has been filtered out
	const filteredData = data.filter(obj => !obj._hidden);
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredData.length) : 0;
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const onSortClicked = (event) => {
		const field = event.target.closest('.sortable-header').dataset.field;
		sortData(field);
	}
	return (
		<TableContainer component={Paper}>
			<TableWrapper>
				<TableHead>
					<TableRow>
						{metadata.headers.map((header, index) => (
							<TableCellWrapper key={index}>
								{!sortStates?.find(state => state.field === header.field) && header.label}
								{sortStates?.find(state => state.field === header.field) &&
									<div className="sortable-header" onClick={onSortClicked} data-field={header.field}>
										{header.label}
										{sortStates?.find(state => state.field === header.field).direction === '' &&
											<FaSort />
										}
										{sortStates?.find(state => state.field === header.field).direction === 'asc' &&
											<FaSortUp />
										}
										{sortStates?.find(state => state.field === header.field).direction === 'desc' &&
											<FaSortDown />
										}
									</div>
								}
							</TableCellWrapper>
						))}
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
						: filteredData).map((object, objIndex) => (
							<TableRow key={objIndex}>
								{metadata.headers.map((header, headerIndex) => {
									const val = object[header.field];
									return (
										<TableCellWrapper key={headerIndex}>
											{header.render ? header.render(val) : val}
										</TableCellWrapper>
									);
								})}
								{ metadata.rowActions &&
									<TableCellWrapper>
										<div className="btn-group">
											{metadata.rowActions.map((action, actionIndex) => (
												<button key={actionIndex}
													type="button"
													className={action.className}
													data-row_object_id={object[action.idField]}
													onClick={action.handler}>
													{action.label}
												</button>
											))}
										</div>
									</TableCellWrapper>
								}
							</TableRow>
						))}
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
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableRow>
				</TableFooterWrapper>
			</TableWrapper>
		</TableContainer>
	);
};

export default PaginationTable;