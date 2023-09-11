import styled from 'styled-components';

const DashboardNavbarWrapper = styled.nav`
	background-color: var(--primary-900);
	position: fixed;
	top: 0;
	padding: 1em;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	.hamburger-icon {
		display: none;
		cursor: pointer;
	}
	.hamburger-icon:hover {
		color: var(--primary-400);
	}
	.user-menu {
		display: flex;
		gap: 2em;
		justify-content: center;
		align-items: center;
	}
	.profile-menu {
		background-color: var(--primary-400);
		position: absolute;
		width: 9em;
		top: 4em;
		right: 1em;
		border-radius: 10px;
		max-height: 12em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.profile-menu-collapsed {
		transition: max-height 0.5s;
		overflow: hidden;
		max-height: 0;
	}
	.notification-container {
		background-color: var(--dynamic-bg-color);
		color: var(--dynamic-text-color);
		position: absolute;
		max-height: 500px;
		width: 400px;
		overflow-y: auto;
		top: 4em;
		right: 12em;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		border: 1px solid var(--dynamic-text-color);
	}
	.notification-list {
		padding: 1em 0;
	}
	.notification-container::-webkit-scrollbar {
		width: 10px;
	}
	.notification-container::-webkit-scrollbar-track {
		background: var(--white);
		border-left: solid 1px var(--grey-300);
	}
	.notification-container::-webkit-scrollbar-thumb {
		background: var(--grey-400);
		border-radius: 10px;
	}
	.notifications-collapsed {
		transition: max-height 0.5s;
		overflow: hidden;
		max-height: 0;
		padding: 0 1em;
		border: none;
	}
	.no-notification-msg {
		text-transform: capitalize;
		text-align: center;
		font-weight: 700;
	}
	.profile-menu-item:first-of-type {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.profile-menu-item:last-of-type {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.profile-menu-item {
		width: 100%;
		padding: 0.5em 1em;
		text-align: center;
		color: var(--white);
		text-decoration: none;
		cursor: pointer;
	}
	.profile-menu-item:hover {
		background-color: var(--primary-800);
	}
	@media screen and (width < 1000px) {
		.user-menu {
			display: none;
		}
		.hamburger-icon {
			display: flex;
			align-items: center;
		}
		.logo {
			font-size: 0.8em;
		}
	}
	@media screen and (width < 500px) {
		.logo {
			font-size: 0.5em;
		}
	}
`;

export default DashboardNavbarWrapper;