import styled from 'styled-components';

const ErrorWrapper = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;
	img {
		width: 90vw;
		max-width: 600px;
	}
	h1 {
		text-transform: capitalize;
	}
`;

export default ErrorWrapper;