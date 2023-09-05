import DashboardLayoutWrapper from "../styled/pages/DashboardLayoutWrapper";
import AppContext from "../main";
import { Outlet, Link } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';
import Logo from '../components/Logo';
import NotificationBell from '../components/NotificationBell';
import ProfileButton from '../components/ProfileButton';
import NotificationItem from "../components/NotificationItem";
import { MdArrowForwardIos, MdDashboard, MdAdminPanelSettings, MdEvent, MdDarkMode, MdLightMode } from 'react-icons/md';
import { CgCloseR } from 'react-icons/cg';
import { IoMdArrowDropdown, IoMdArrowDropleft, IoMdLogOut } from 'react-icons/io';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
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
	const notificationListRef = useRef(null);
	const { darkModePref, saveDarkModePref } = useContext(AppContext);
	const [company, setCompany] = useState(companyData);
	const [user, setUser] = useState(userData);
	const [isDarkMode, setIsDarkMode] = useState(darkModePref);
	const [showMenuModal, setShowMenuModal] = useState(false);
	const [notificationItems, setNotificationItems] = useState(notificationData);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const [showNewNotifications, setShowNewNotifications] = useState(false);
	const [showUserMenu, setShowUserMenu ] = useState(true);
	const [showEventMenu, setShowEventMenu] = useState(false);
	const [showAdminMenu, setShowAdminMenu] = useState(false);

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
	const toggleShowUserMenu = () => { setShowUserMenu(value => !value); };
	const toggleEventMenuItem = (event) => {
		const target = event.target.closest('.app-menu-item').dataset.target;
		if(target === 'event') setShowEventMenu(value => !value);
		if(target === 'admin') setShowAdminMenu(value => !value);
	};
	// Close any open dropdown menus or panels that should close when user clicks outside them.
	const closeTransientItems = (event) => {
		if(!event.target.closest('#profile-btn')) setShowProfileMenu(false);
		if(!event.target.closest('#notification-bell') &&
			!notificationListRef.current.contains(event.target)) setShowNewNotifications(false);
		if(event.target.closest('.modal-close')) setShowMenuModal(false);
	};
	return (
		<DashboardLayoutWrapper onClick={closeTransientItems} className={isDarkMode ? 'dark-mode' : ''}>
			<div className={`modal ${showMenuModal ? '' : 'modal-hidden'}`}>
				<div className="modal-menu">
					<div className="modal-menu-content">
						<div className="modal-menu-header">
							<Logo to="/dashboard" className="modal-close logo" />
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
			<nav>
				<div className="logo">
					<Logo theme="light" to="/dashboard" />
				</div>
				<div className="user-menu">
					{
						isDarkMode && <MdLightMode size="1.5em" cursor="pointer" onClick={toggleDarkMode}
						title="Turn Off Dark Mode" />
					}
					{
						!isDarkMode && <MdDarkMode size="1.5em" cursor="pointer" onClick={toggleDarkMode}
						title="Turn On Dark Mode" />
					}
					<NotificationBell id="notification-bell" count={notificationItems.length} onClick={toggleNewNotificationList}/>
					<div className={`notification-container ${showNewNotifications ? '' : 'notifications-collapsed'}`}>
						<ul ref={notificationListRef} className="notification-list">
							{notificationItems.length > 0 && notificationItems.map(item => {
								return (
									<NotificationItem key={item._id}
										notification={item}
										removeNotificationItem={removeNotificationItem}
									/>
								);
							})}
							{notificationItems.length == 0 && <p className="no-notification-msg">no new notifications</p>}
						</ul>
					</div>
					<ProfileButton id="profile-btn" onClick={toggleProfileMenu} user={user} />
					<ul className={`profile-menu ${showProfileMenu ? '' : 'profile-menu-collapsed'}`}>
						<Link className="list-item profile-menu-item" to="/dashboard/profile">
							My Profile
						</Link>
						<Link className="list-item profile-menu-item" to="/dashboard/notification">
							Notifications
						</Link>
						<Link className="list-item profile-menu-item">
							Logout
						</Link>
					</ul>
				</div>
				<div className="hamburger-icon">
					<GiHamburgerMenu size="1.5em" onClick={toggleMenuModal} />
				</div>
			</nav>
			{!showUserMenu &&
				<aside className="app-menu-expand-btn" onClick={toggleShowUserMenu} title="Open Side Menu">
					<MdArrowForwardIos />
				</aside>
			}
			<aside className={`app-menu ${showUserMenu ? '' : 'app-menu-collapsed'}`}>
				<div className="app-menu-header">
					<MdDashboard />
					{company.name}
					<div onClick={toggleShowUserMenu} className="hide-app-menu-btn">
						<CgCloseR title="Close Side Menu" />
					</div>
				</div>
				<ul className="app-menu-list">
					<li className={`list-item app-menu-item ${showEventMenu ? '' : 'app-menu-item-collapsed'}`}
						onClick={toggleEventMenuItem} data-target='event'>
						<span className="app-menu-item-label"><MdEvent />management</span>
						{showEventMenu && <IoMdArrowDropdown/>}{!showEventMenu && <IoMdArrowDropleft/>}
					</li>
					<li className="list-item app-menu-nested-list">
						<ul>
							{managementMenuItems.map(item => {
								return (
									<Link key={item.key} className="list-item app-menu-item nested" to={item.path}>
										{item.label}
									</Link>
								);
							})}
						</ul>
					</li>
					<li className={`list-item app-menu-item ${showAdminMenu ? '' : 'app-menu-item-collapsed'}`}
						onClick={toggleEventMenuItem} data-target='admin'>
						<span className="app-menu-item-label"><MdAdminPanelSettings/>administration</span>
						{showAdminMenu && <IoMdArrowDropdown />}{!showAdminMenu && <IoMdArrowDropleft />}
					</li>
					<li className="list-item app-menu-nested-list">
						<ul>
							{adminMenuItems.map(item => {
								return (
									<Link key={item.key} className="list-item app-menu-item nested" to={item.path}>
										{item.label}
									</Link>
								);
							})}
						</ul>
					</li>
				</ul>
			</aside>
			<section><Outlet/></section>
		</DashboardLayoutWrapper>
	);
};

export default DashboardLayout;