import DashboardMenuModalWrapper from "../../styled/components/dashboard/DashboardMenuModalWrapper";
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { CgCloseR } from 'react-icons/cg';
import { IoMdLogOut } from 'react-icons/io';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import adminMenuItems from '../../constants/AdminMenuItems.js';
import managementMenuItems from '../../constants/ManagementMenuItems.js';

const DashboardMenuModal = ({showMenuModal, toggleMenuModal, isDarkMode, toggleDarkMode, logout}) => {
	return (
		<DashboardMenuModalWrapper className={showMenuModal ? '' : 'modal-hidden'}>
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
							<Link className="modal-menu-icon modal-close" onClick={logout}>
								<IoMdLogOut size="2em" title="Logout" />
							</Link>
						</div>
						<div className="modal-app-menu">
							<p className="modal-app-menu-list-header">management</p>
							<ul className="modal-app-menu-list">
								{managementMenuItems.map(item => (
									<Link key={item.key} className="modal-menu-item modal-close" to={item.path}>
										{item.label}
									</Link>
								))}
							</ul>
							<p className="modal-app-menu-list-header">administration</p>
							<ul className="modal-app-menu-list">
								{adminMenuItems.map(item => (
									<Link key={item.key} className="modal-menu-item modal-close" to={item.path}>
										{item.label}
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</DashboardMenuModalWrapper>
	)
}

export default DashboardMenuModal;