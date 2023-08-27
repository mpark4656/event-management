import styled from 'styled-components';

const BasicTextFieldWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 0.5em 0;
	label {
		text-transform: capitalize;
		font-size: 0.9em;
		font-weight: 550;
	}
	input {
		border: none;
		border-bottom: 2px solid var(--grey-400);
		padding: 1em 3em;
		font-size: 1em;
	}
	input:focus {
		outline: none;
		border-bottom: 2px solid var(--grey-800);
	}
	input:focus + .form-input-icon {
		color: var(--grey-800);
	}
	.form-input-icon {
		position: absolute;
		color: var(--grey-400);
		top: 2.3em;
		left: 1em;
	}
	.invalid {
		border-bottom-color: red;
	}
	.invalid + .form-input-icon {
		color: red;
	}
`;

export default BasicTextFieldWrapper;