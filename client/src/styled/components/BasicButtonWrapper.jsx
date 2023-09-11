import styled from 'styled-components';

const BasicButtonWrapper = styled.button`
	&.btn {
		border: none;
		border-radius: 3em;
		padding: 1em 2em;
		cursor: pointer;
		text-transform: capitalize;
	}
	&.btn-primary {
		background-color: var(--primary-400);
		color: var(--white);
	}
	&.btn-primary:hover {
		background-color: var(--primary-900);
	}
	&.btn-warning {
		background-color: #E4A11B;
		color: var(--white);
	}
	&.btn-warning:hover {
		background-color: #b87e0a;
	}
	&.btn:disabled {
		color: var(--grey-400);
		background-color: var(--grey-200);
	}
`;

export default BasicButtonWrapper;