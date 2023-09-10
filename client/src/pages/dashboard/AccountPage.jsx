import AccountWrapper from '../../styled/pages/dashboard/AccountWrapper';
import PaginationTable from '../../components/dashboard/PaginationTable';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import customFetch from '../../utils/customFetch.js';

export const loader = async () => {
	try {
		const response = await customFetch.get('/admin/user');
		return response.data.users;
	} catch (error) {
		return error;
	}
}

const AccountPage = () => {
	const userData = useLoaderData();
	const [ data, setData ] = useState(userData);
	const tableMetadata = {
		rowsPerPageOptions: [5, 10, 15],
		headers: [{
			label: 'Email',
			field: 'email',
			sortable: true
		},{
			label: 'Name',
			field: 'name',
			sortable: true
		},{
			label: 'User Role',
			field: 'role',
			sortable: true
		}],
		rowActions: [{
			label: 'View',
			func: (event) => {
				console.log('View Clicked', event.target.dataset.target_id)
			},
			idField: '_id',
			className: 'btn-primary'
		},{
			label: 'Edit',
			func: (event) => {
				console.log('Edit Clicked', event.target.dataset.target_id);
			},
			idField: '_id',
			className: 'btn-warning'
		},{
			label: 'Delete',
			func: (event) => {
				console.log('Delete Clicked', event.target.dataset.target_id)
			},
			idField: '_id',
			className: 'btn-danger'
		}]
	};
	return (
		<AccountWrapper>
			<h1>User Account Setup</h1>
			<PaginationTable
				metadata={tableMetadata}
				rowObjects={data}
				setRowObjects={setData}
			/>
		</AccountWrapper>
	)
};

export default AccountPage;