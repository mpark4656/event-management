import styled from 'styled-components';

const DashboardLayoutWrapper = styled.main`
	background-color: var(--primary-900);
	color: var(--white);
	min-height: 100vh;
	padding: 5em 0;
	display: flex;
	ul {
		list-style-type: none;
	}
	.list-item {
		color: var(--white);
		text-decoration: none;
		cursor: pointer;
	}
	.modal {
		background-color: rgba(0, 0, 0, 0.7);
		transition: bottom 0.5s;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
	}
	.modal-hidden {
		bottom: 2000px;
	}
	.modal-menu {
		background-color: var(--dynamic-bg-color);
		color: var(--dynamic-text-color);
		position: absolute;
		top: 1em;
		left: 1em;
		right: 1em;
		bottom: 1em;
		overflow: hidden;
		border-radius: 10px;
	}
	.modal-menu-content {
		margin: 2em;
		display: flex;
		flex-direction: column;
	}
	.modal-menu-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1em;
	}
	.modal-user-menu {
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-top: 1px solid var(--dynamic-text-color);
		padding: 0.5em 0;
	}
	.modal-menu-icon {
		color: var(--dynamic-text-color);
		cursor: pointer;
	}
	.modal-menu-icon:hover {
		color: var(--primary-400);
	}
	.modal-app-menu-list-header {
		text-align: center;
		font-weight: 700;
		padding: 0.5em 0;
		text-transform: uppercase;
		border-top: solid 1px var(--dynamic-text-color);
	}
	.modal-app-menu-list {
		display: flex;
		flex-direction: column;
	}
	.modal-menu-item {
		color: var(--dynamic-text-color);
		text-decoration: none;
		cursor: pointer;
		padding: 0.5em 0;
		text-align: center;
		text-transform: capitalize;
	}
	.modal-menu-item:hover {
		color: var(--white);
		background-color: var(--primary-400);
	}
	nav {
		background-color: var(--primary-900);
		position: fixed;
		top: 0;
		padding: 1em;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
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
	}
	.profile-menu-item:hover {
		background-color: var(--primary-800);
	}
	.app-menu {
		background-color: var(--primary-800);
		position: fixed;
		top: 5em;
		left: 0;
		bottom: 1em;
		width: 21em;
		transition: left .5s ease-in-out;
	}
	.app-menu-collapsed {
		left: -21em;
	}
	.app-menu + section {
		margin-left: 21em;
	}
	.app-menu-collapsed + section {
		margin-left: 1em;
	}
	.app-menu-expand-btn {
		background-color: var(--primary-400);
		padding: 1.5em 0.1em;
		position: fixed;
		top: 50%;
		left: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.app-menu-expand-btn:hover {
		color: var(--primary-900);
	}
	.app-menu-header {
		background-color: var(--primary-700);
		font-size: 1.2em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1em;
		height: 5em;
	}
	.hide-app-menu-btn {
		padding: 0.1em;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hide-app-menu-btn:hover {
		color: var(--primary-900);
	}
	.app-menu-list {
		text-transform: capitalize;
		font-size: 1.1em;
	}
	.app-menu-item {
		padding: 1em 1em 1em 2em;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.app-menu-item-label {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 1em;
	}
	.app-menu-item:hover {
		background-color: var(--primary-700);
	}
	.app-menu-nested-list {
		background-color: var(--grey-800);
		max-height: 20em;
	}
	.app-menu-item.nested {
		padding: 1em 1em 1em 4em;
	}
	.app-menu-item-collapsed + .app-menu-nested-list {
		transition: max-height 0.5s;
		overflow: hidden;
		max-height: 0;
	}
	section {
		transition: margin 0.5s ease-in-out;
		padding: 0 1em;
		margin-bottom: -4em;
		width: 100%;
	}
	@media screen and (width >= 900px) {
		.modal {
			display: none;
		}
	}
	@media screen and (width < 900px) {
		.user-menu {
			display: none;
		}
		.app-menu-expand-btn {
			display: none;
		}
		.app-menu {
			display: none;
		}
		.app-menu + section {
			margin-left: 0;
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

export default DashboardLayoutWrapper;