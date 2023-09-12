import AccountFilterPanelWrapper from '../../styled/components/dashboard/AccountFilterPanelWrapper';
import BasicTextField from '../BasicTextField';
import BasicButton from '../BasicButton';
import { useState } from 'react';

const AccountFilterPanel = ({ setUserData }) => {
	const [ emailValue, setEmailValue ] = useState('');
	const [ nameValue, setNameValue ] = useState('');
	const [ userRoleValue, setUserRoleValue ] = useState('');
	const filterData = (event) => {
		setUserData(data => data.map(user => {
			const emailMatch = user.email.toLowerCase().includes(emailValue.toLowerCase());
			const nameMatch = user.name.toLowerCase().includes(nameValue.toLowerCase());
			const roleMatch = user.role.toLowerCase().includes(userRoleValue.toLowerCase());
			user._hidden = !(emailMatch && nameMatch && roleMatch);
			return user;
		}));
		event.preventDefault();
	}
	const clearFilter = () => {
		setUserData(data => data.map(user => {
			user._hidden = false;
			return user;
		}));
		setEmailValue('');
		setNameValue('');
		setUserRoleValue('');
	}
	return (
		<AccountFilterPanelWrapper onSubmit={filterData}>
			<BasicTextField id="email" name="email" placeholder="Filter by email"
				initialValue={emailValue} setValue={setEmailValue}
			/>
			<BasicTextField id="name" name="name" placeholder="Filter by name"
				initialValue={nameValue} setValue={setNameValue}
			/>
			<BasicTextField id="userRole" name="userRole" labelText="User Role" placeholder="Filter by user role"
				initialValue={userRoleValue} setValue={setUserRoleValue}
			/>
			<div className="btn-container">
				<BasicButton label="Filter" type="submit" className="btn-primary" />
				<BasicButton label="Clear Filter" type="button" className="btn-warning" onClick={clearFilter}/>
			</div>
		</AccountFilterPanelWrapper>
	);
};

export default AccountFilterPanel;