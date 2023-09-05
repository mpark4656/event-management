import styled from 'styled-components';
import SectionContainerWrapper from './SectionContainerWrapper';

const ResourceWrapper = styled(SectionContainerWrapper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;
	img {
		width: 30%;
		min-width: 300px;
	}
`;

export default ResourceWrapper;