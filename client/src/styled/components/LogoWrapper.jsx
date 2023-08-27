import styled from 'styled-components';

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;
	img {
		width: 3em;
	}
	span {
		text-transform: uppercase;
		font-size: 2em;
	}
	.light {
		color: var(--white);
	}
	.dark {
		color: var(--primary-900);
	}
`;

export default LogoWrapper;