import styled from 'styled-components';

const LoginWrapper = styled.main`
	height: 100vh;
	background-color: var(--primary-900);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 25%;
	}
	section {
		background-color: var(--white);
		width: 90%;
		max-width: 400px;
		border-radius: 1em;
		padding: 1em;
		box-shadow: 0 0 1px 2px var(--grey-400);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		margin: 1em 0;
	}
	.bottom-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		margin: 1em 0;
	}
	.link-btn {
		color: var(--primary-400);
		text-decoration: none;
		margin-left: 0.5em;
	}
`;

export default LoginWrapper;