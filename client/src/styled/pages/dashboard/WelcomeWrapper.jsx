import styled from 'styled-components';
import SectionContainerWrapper from './SectionContainerWrapper';

const WelcomeWrapper = styled(SectionContainerWrapper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;
	h1 {
		font-size: 3em;
	}
	p {
		font-size: 1.5em;
	}
	img {
		width: 30%;
		min-width: 250px;
	}
`;

export default WelcomeWrapper;