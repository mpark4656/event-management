import styled from 'styled-components';

const AccountFilterPanelWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2em;
	button {
		align-self: end;
		justify-self: start;
	}
	.btn-container {
		display: flex;
		gap: 1em;
	}
	@media screen and (width <= 1400px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
	}
	@media screen and (width < 1165px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
	@media screen and (width < 1000px) {
		grid-template-rows: repeat(4, 1fr);
		grid-template-columns: none;
	}
`;

export default AccountFilterPanelWrapper;