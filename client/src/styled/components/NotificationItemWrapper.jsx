import styled from 'styled-components';

const NotificationItemWrapper = styled.li`
	padding-left: 1em;
	display: flex;
	align-items: center;
	gap: 1em;
	&:not(:last-of-type) {
		border-bottom: var(--dynamic-text-color) 1px solid;
	}
	.main-body {
		border-left: 5px solid var(--primary-400);
		padding-left: 1em;
		width: 85%;
		display: flex;
		flex-direction: column;
		gap: 0.3em;
		margin: 1em 0
	}
	.title {
		font-weight: 600;
	}
	.close-btn-container {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.close-btn-container:hover {
		font-size: 1.3em;
	}
	.timestamp {
		color: var(--grey-400);
		font-size: 0.8em;
	}
`;

export default NotificationItemWrapper;