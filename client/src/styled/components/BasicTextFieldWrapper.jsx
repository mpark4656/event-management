import styled from 'styled-components';

const BasicTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	label {
		text-transform: capitalize;
	}
	input {
		background-color: var(--dynamic-bg-color);
		color: var(--dynamic-text-color);
		border-radius: 5px;
		padding: 0.5em 1em;
		border: 1px solid var(--dynamic-text-color);
		font-size: 1em;
	}
`;

export default BasicTextWrapper;