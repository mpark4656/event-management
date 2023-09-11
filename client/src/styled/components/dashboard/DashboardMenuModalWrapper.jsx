import styled from 'styled-components';

const DashboardMenuModalWrapper = styled.nav`
	background-color: rgba(0, 0, 0, 0.7);
	transition: bottom 0.5s;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	&.modal-hidden {
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
	@media screen and (width >= 1000px) {
		& {
			display: none;
		}
	}
`;

export default DashboardMenuModalWrapper;