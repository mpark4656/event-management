import AccountWrapper from '../../styled/pages/dashboard/AccountWrapper';
import PaginationTable from '../../components/dashboard/PaginationTable';
import AccountFilterPanel from '../../components/dashboard/AccountFilterPanel';
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
};

const initialSortStates = [{
	field: 'email',
	direction: ''
},{
	field: 'name',
	direction: ''
},{
	field: 'role',
	direction: ''
}];

const AccountPage = () => {
	const [ userData, setUserData ] = useState(useLoaderData());
	const [ sortStates, setSortStates ] = useState(initialSortStates);
	const tableMetadata = {
		rowsPerPageOptions: [5, 10, 15],
		headers: [{
			label: 'Email',
			field: 'email'
		},{
			label: 'Name',
			field: 'name'
		},{
			label: 'User Role',
			field: 'role'
		}],
		rowActions: [{
			label: 'View',
			handler: (event) => {
				console.log('View Clicked', event.target.dataset.target_id)
			},
			idField: '_id',
			className: 'btn-primary'
		},{
			label: 'Edit',
			handler: (event) => {
				console.log('Edit Clicked', event.target.dataset.target_id);
			},
			idField: '_id',
			className: 'btn-warning'
		},{
			label: 'Delete',
			handler: (event) => {
				console.log('Delete Clicked', event.target.dataset.target_id)
			},
			idField: '_id',
			className: 'btn-danger'
		}]
	};
	const resetSortStates = () => {
		setSortStates(initialSortStates);
	};
	const sortUserData = (field) => {
		const direction = sortStates.find(state => state.field === field).direction === 'desc' ? 'asc' : 'desc';
		setSortStates(states => states.map(state => {
			state.direction = state.field === field ? direction : '';
			return state;
		}));
		setUserData(users => users.toSorted((first, second) => {
			if(direction === 'asc') return first[field].toLowerCase() > second[field].toLowerCase() ? 1 : -1;
			if(direction === 'desc') return first[field].toLowerCase() < second[field].toLowerCase() ? 1 : -1;
		}));
	};
	return (
		<AccountWrapper>
			<h1>User Account Setup</h1>
			<AccountFilterPanel setUserData={setUserData} />
			<PaginationTable
				metadata={tableMetadata}
				data={userData}
				sortStates={sortStates}
				sortData={sortUserData}
			/>
		</AccountWrapper>
	)
};

export default AccountPage;