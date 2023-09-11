import DashboardNavbarWrapper from "../../styled/components/dashboard/DashboardNavbarWrapper";
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import NotificationBell from './NotificationBell';
import ProfileButton from './ProfileButton';
import NotificationItem from "./NotificationItem";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const DashboardNavbar = ({
	isDarkMode, toggleDarkMode, toggleMenuModal, user, notificationItems, removeNotificationItem,
	showProfileMenu, toggleProfileMenu, showNewNotifications, toggleNewNotificationList, logout
}) => {
	return (
		<DashboardNavbarWrapper>
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
					<ul className="notification-list">
						{notificationItems.length > 0 && notificationItems.map(item => (
							<NotificationItem key={item._id}
								notification={item}
								removeNotificationItem={removeNotificationItem}
							/>
						))}
						{notificationItems.length == 0 && <p className="no-notification-msg">no new notifications</p>}
					</ul>
				</div>
				<ProfileButton id="profile-btn" onClick={toggleProfileMenu} user={user} />
				<ul className={`profile-menu ${showProfileMenu ? '' : 'profile-menu-collapsed'}`}>
					<Link className="profile-menu-item" to="/dashboard/profile">
						My Profile
					</Link>
					<Link className="profile-menu-item" to="/dashboard/notification">
						Notifications
					</Link>
					<Link className="profile-menu-item" onClick={logout}>
						Logout
					</Link>
				</ul>
			</div>
			<div className="hamburger-icon">
				<GiHamburgerMenu size="1.5em" onClick={toggleMenuModal} />
			</div>
		</DashboardNavbarWrapper>
	);
};

export default DashboardNavbar;