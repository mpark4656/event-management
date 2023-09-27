import DashboardLayoutWrapper from "../styled/pages/DashboardLayoutWrapper";
import AppContext from "../main";
import { useLoaderData, Outlet, redirect, useNavigate } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';
import { toast } from 'react-toastify';
import DashboardMenuModal from "../components/dashboard/DashboardMenuModal";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSideMenu from "../components/dashboard/DashboardSideMenu";
import customFetch from '../utils/customFetch.js';

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

// Temporary company data
const companyData = {
	name: 'My Organization'
}

export const loader = async () => {
	try {
		const response = await customFetch.get('/current-user');
		return response.data.user;
	} catch(err) {
		toast.warn('Login required', {toastId: 'toast-login-required'});
		return redirect('/login');
	}
};

const DashboardContext = createContext();

const DashboardLayout = () => {
	const userData = useLoaderData();
	const { darkModePref, saveDarkModePref } = useContext(AppContext);
	const [company, setCompany] = useState(companyData);
	const [user, setUser] = useState(userData);
	const [isDarkMode, setIsDarkMode] = useState(darkModePref);
	const [showMenuModal, setShowMenuModal] = useState(false);
	const [notifications, setNotifications] = useState(notificationData);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const [showNewNotifications, setShowNewNotifications] = useState(false);
	const [showUserMenu, setShowUserMenu ] = useState(true);
	const navigate = useNavigate();

	const removeNotification = (id) => {
		setNotifications(items => {
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
	const logout = async () => {
		try {
			await customFetch.get('/logout');
			toast.success('Successfully logged out', {toastId: 'toast-logout-success'});
		} catch(err) {}
		navigate('/');
	};
	return (
		<DashboardContext.Provider value={{
			user: user, setUser: setUser,
			company: company, setCompany: setCompany,
			notifications: notifications, setNotifications: setNotifications, removeNotification: removeNotification,
			isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode,
			logout: logout
		}}>
			<DashboardLayoutWrapper onClick={closeTransientItems} className={isDarkMode ? 'dark-mode' : ''}>
				<DashboardMenuModal showMenuModal={showMenuModal} toggleMenuModal={toggleMenuModal} />
				<DashboardNavbar
					toggleMenuModal={toggleMenuModal}
					showNewNotifications={showNewNotifications}
					showProfileMenu={showProfileMenu}
					toggleProfileMenu={toggleProfileMenu}
					toggleNewNotificationList={toggleNewNotificationList}
				/>
				<DashboardSideMenu showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
				<section className={showUserMenu ? 'section-left-margin' : ''}><Outlet context={{ isDarkMode: isDarkMode }}/></section>
			</DashboardLayoutWrapper>
		</DashboardContext.Provider>
	);
	
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;