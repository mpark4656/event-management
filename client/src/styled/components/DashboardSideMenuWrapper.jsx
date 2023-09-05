import styled from 'styled-components';

const DashboardSideMenuWrapper = styled.aside`
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
		color: var(--white);
		text-decoration: none;
		cursor: pointer;
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
`;

export default DashboardSideMenuWrapper;