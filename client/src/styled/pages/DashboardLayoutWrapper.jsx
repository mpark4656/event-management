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
	section {
		transition: margin 0.5s ease-in-out;
		padding: 0 1em;
		margin-bottom: -4em;
		margin-left: 1em;
		width: 100%;
	}
	.section-left-margin {
		margin-left: 21em;
	}
	@media screen and (width < 1000px) {
		section, .section-left-margin {
			margin-left: 0;
		}
	}
`;

export default DashboardLayoutWrapper;