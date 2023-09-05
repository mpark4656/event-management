import DashboardLayoutWrapper from "../styled/pages/DashboardLayoutWrapper";
import AppContext from "../main";
import { Outlet } from 'react-router-dom';
import { useState, useContext } from 'react';
import DashboardMenuModal from "../components/dashboard/DashboardMenuModal";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSideMenu from "../components/dashboard/DashboardSideMenu";

// This is a temporary static notification data.
const notificationData = [
	{
		_id: '1',
		type: 'event',
		title: 'Party at Company HQ',
		message: 'Hope you are all excited for our upcoming party.',
		datetime: new Date()

	},{
		_id: '2',
		type: 'system',
		title: 'Planned Maintenance - System will be down',
		message: 'The system will be down this weekend for a planned maintenance',
		datetime: new Date()
	},{
		_id: '3',
		type: 'announcement',
		title: 'Greg has won the company bowling tournament!',
		message: 'Please congratulate Greg if you see him. Greg placed the first place in our company\'s 5th bowling tournament.',
		datetime: new Date()
	},
];
// Temporary static user data
const userData = {
	_id: '1',
	firstName: 'John',
	lastName: 'Smith'
}
// Temporary company data
const companyData = {
	name: 'My Organization'
}

const DashboardLayout = () => {
	const { darkModePref, saveDarkModePref } = useContext(AppContext);
	const [company, setCompany] = useState(companyData);
	const [user, setUser] = useState(userData);
	const [isDarkMode, setIsDarkMode] = useState(darkModePref);
	const [showMenuModal, setShowMenuModal] = useState(false);
	const [notificationItems, setNotificationItems] = useState(notificationData);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const [showNewNotifications, setShowNewNotifications] = useState(false);
	const [showUserMenu, setShowUserMenu ] = useState(true);

	const removeNotificationItem = (id) => {
		setNotificationItems(items => {
			return items.filter(item => item._id != id);
		});
	}
	const toggleDarkMode = () => { setIsDarkMode(value => {
		saveDarkModePref(!value);
		return !value;
	})};
	const toggleMenuModal = () => { setShowMenuModal(value => !value); }
	const toggleProfileMenu = () => { setShowProfileMenu(value => !value); };
	const toggleNewNotificationList = () => { setShowNewNotifications(value => !value); };
	// Close any open dropdown menus or panels that should close when user clicks outside them.
	const closeTransientItems = (event) => {
		if(!event.target.closest('#profile-btn')) setShowProfileMenu(false);
		if(!event.target.closest('#notification-bell')
			&& !event.target.closest('.notification-container')) setShowNewNotifications(false);
		if(event.target.closest('.modal-close')) setShowMenuModal(false);
	};

	return (
		<DashboardLayoutWrapper onClick={closeTransientItems} className={isDarkMode ? 'dark-mode' : ''}>
			<DashboardMenuModal
				showMenuModal={showMenuModal}
				toggleMenuModal={toggleMenuModal}
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
			/>
			<DashboardNavbar
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				toggleMenuModal={toggleMenuModal}
				user={user}
				notificationItems={notificationItems}
				removeNotificationItem={removeNotificationItem}
				showProfileMenu={showProfileMenu}
				toggleProfileMenu={toggleProfileMenu}
				showNewNotifications={showNewNotifications}
				toggleNewNotificationList={toggleNewNotificationList}
			/>
			<DashboardSideMenu
				showUserMenu={showUserMenu}
				setShowUserMenu={setShowUserMenu}
				company={company}
			/>
			<section className={showUserMenu ? 'section-left-margin' : ''}><Outlet/></section>
		</DashboardLayoutWrapper>
	);
};

export default DashboardLayout;