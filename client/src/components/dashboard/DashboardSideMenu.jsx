import DashboardSideMenuWrapper from "../../styled/components/dashboard/DashboardSideMenuWrapper";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgCloseR } from 'react-icons/cg';
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io';
import { MdArrowForwardIos, MdDashboard, MdAdminPanelSettings, MdEvent } from 'react-icons/md';
import adminMenuItems from '../../constants/AdminMenuItems.js';
import managementMenuItems from '../../constants/ManagementMenuItems.js';

const DashboardSideMenu = ({showUserMenu, setShowUserMenu, company}) => {
	const [showEventMenu, setShowEventMenu] = useState(false);
	const [showAdminMenu, setShowAdminMenu] = useState(false);
	const toggleShowUserMenu = () => { setShowUserMenu(value => !value); };
	const toggleEventMenuItem = (event) => {
		const target = event.target.closest('.app-menu-item').dataset.target;
		if(target === 'event') setShowEventMenu(value => !value);
		if(target === 'admin') setShowAdminMenu(value => !value);
	};
	return (
		<DashboardSideMenuWrapper>
			{!showUserMenu &&
				<div className="app-menu-expand-btn" onClick={toggleShowUserMenu} title="Open Side Menu">
					<MdArrowForwardIos />
				</div>
			}
			<div className={`app-menu ${showUserMenu ? '' : 'app-menu-collapsed'}`}>
				<div className="app-menu-header">
					<MdDashboard />
					{company.name}
					<div onClick={toggleShowUserMenu} className="hide-app-menu-btn">
						<CgCloseR title="Close Side Menu" />
					</div>
				</div>
				<ul className="app-menu-list">
					<li className={`app-menu-item ${showEventMenu ? '' : 'app-menu-item-collapsed'}`}
						onClick={toggleEventMenuItem} data-target='event'>
						<span className="app-menu-item-label"><MdEvent />management</span>
						{showEventMenu && <IoMdArrowDropdown/>}{!showEventMenu && <IoMdArrowDropleft/>}
					</li>
					<li className="app-menu-nested-list">
						<ul>
							{managementMenuItems.map(item => {
								return (
									<Link key={item.key} className="app-menu-item nested" to={item.path}>
										{item.label}
									</Link>
								);
							})}
						</ul>
					</li>
					<li className={`app-menu-item ${showAdminMenu ? '' : 'app-menu-item-collapsed'}`}
						onClick={toggleEventMenuItem} data-target='admin'>
						<span className="app-menu-item-label"><MdAdminPanelSettings/>administration</span>
						{showAdminMenu && <IoMdArrowDropdown />}{!showAdminMenu && <IoMdArrowDropleft />}
					</li>
					<li className="app-menu-nested-list">
						<ul>
							{adminMenuItems.map(item => {
								return (
									<Link key={item.key} className="app-menu-item nested" to={item.path}>
										{item.label}
									</Link>
								);
							})}
						</ul>
					</li>
				</ul>
			</div>
		</DashboardSideMenuWrapper>
	);
};

export default DashboardSideMenu;