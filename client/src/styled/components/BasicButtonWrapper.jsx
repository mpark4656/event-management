import styled from 'styled-components';

const BasicButtonWrapper = styled.span`
	.btn {
		border: none;
		border-radius: 3em;
		padding: 1em 3em;
		cursor: pointer;
		text-transform: capitalize;
	}
	.btn-primary {
		background-color: var(--primary-400);
		color: var(--white);
	}
	.btn-primary:hover {
		background-color: var(--primary-900);
	}
	.btn:disabled {
		color: var(--grey-400);
		background-color: var(--grey-200);
	}
`;

export default BasicButtonWrapper;