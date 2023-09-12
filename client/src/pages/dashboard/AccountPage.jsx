import AccountWrapper from '../../styled/pages/dashboard/AccountWrapper';
import PaginationTable from '../../components/dashboard/PaginationTable';
import AccountFilterPanel from '../../components/dashboard/AccountFilterPanel';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
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
				console.log('View Clicked', event.target.dataset.row_object_id)
			},
			idField: '_id',
			className: 'btn-primary'
		},{
			label: 'Edit',
			handler: (event) => {
				console.log('Edit Clicked', event.target.dataset.row_object_id);
			},
			idField: '_id',
			className: 'btn-warning'
		},{
			label: 'Delete',
			handler: async (event) => {
				try {
					const userId = event.target.dataset.row_object_id;
					const user = userData.find(user => user._id === userId);
					if(confirm(`Are you sure you want to delete ${user.email}?`)) {
						await customFetch.delete(`/admin/user/${userId}`);
						setUserData(users => users.filter(user => user._id !== userId));
						toast.success(`Successfully removed ${user.email}`, {toastId: 'delete-user-success'});
					}
				} catch(error) {
					toast.error(err.response.data.msg, {toastId: 'delete-user-error'});
				}
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
			<AiOutlineUserAdd className="user-add-btn" title="Add New User" />
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