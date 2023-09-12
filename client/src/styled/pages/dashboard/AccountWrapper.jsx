import styled from 'styled-components';
import SectionContainerWrapper from './SectionContainerWrapper';

const AccountWrapper = styled(SectionContainerWrapper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3em;
	.user-add-btn {
		font-size: 2em;
		align-self: center;
		cursor: pointer;
	}
	h1 {
		font-size: 2em;
	}
`;

export default AccountWrapper;