import DashboardLayoutWrapper from "../styled/pages/DashboardLayoutWrapper";
import AppContext from "../main";
import { Outlet, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Logo from '../components/Logo';
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSideMenu from "../components/dashboard/DashboardSideMenu";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { CgCloseR } from 'react-icons/cg';
import { IoMdLogOut } from 'react-icons/io';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

import adminMenuItems from '../constants/AdminMenuItems.js';
import managementMenuItems from '../constants/ManagementMenuItems.js';

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
			<div className={`modal ${showMenuModal ? '' : 'modal-hidden'}`}>
				<div className="modal-menu">
					<div className="modal-menu-content">
						<div className="modal-menu-header">
							<Logo className="logo" />
							<CgCloseR className="modal-menu-icon" onClick={toggleMenuModal} size="2em" />
						</div>
						<div className="modal-menu-body">
							<div className="modal-user-menu">
								{
									isDarkMode && <MdLightMode size="1.5em" className="modal-menu-icon"
									onClick={toggleDarkMode} title="Turn Off Dark Mode" />
								}
								{
									!isDarkMode && <MdDarkMode size="1.5em" className="modal-menu-icon"
									onClick={toggleDarkMode} title="Turn On Dark Mode" />
								}
								<Link className="modal-menu-icon modal-close" to="/dashboard/profile">
									<FaUser size="1.5em" title="My Profile"/>
								</Link>
								<Link className="modal-menu-icon modal-close" to="/dashboard/notification">
									<IoNotificationsOutline size="2em" title="Notifications" />
								</Link>
								<Link className="modal-menu-icon modal-close">
									<IoMdLogOut size="2em" title="Logout" />
								</Link>
							</div>
							<div className="modal-app-menu">
								<p className="modal-app-menu-list-header">management</p>
								<ul className="modal-app-menu-list">
									{managementMenuItems.map(item => {
										return (
											<Link key={item.key} className="modal-menu-item modal-close" to={item.path}>
												{item.label}
											</Link>
										);
									})}
								</ul>
								<p className="modal-app-menu-list-header">administration</p>
								<ul className="modal-app-menu-list">
									{adminMenuItems.map(item => {
										return (
											<Link key={item.key} className="modal-menu-item modal-close" to={item.path}>
												{item.label}
											</Link>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
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
				className="side-menu"
				showUserMenu={showUserMenu}
				setShowUserMenu={setShowUserMenu}
				company={company}
			/>
			<section className={showUserMenu ? 'section-left-margin' : ''}><Outlet/></section>
		</DashboardLayoutWrapper>
	);
};

export default DashboardLayout;