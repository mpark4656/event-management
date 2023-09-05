import styled from 'styled-components';

const NotificationBellWrapper = styled.div`
	position: relative;
	cursor: pointer;
	width: 2em;
	&:hover {
		animation: bellshake .5s cubic-bezier(.36,.07,.19,.97) both;
		backface-visibility: hidden;
		transform-origin: top right;
	}
	@keyframes bellshake {
		0% { transform: rotate(0); }
		15% { transform: rotate(5deg); }
		30% { transform: rotate(-5deg); }
		45% { transform: rotate(4deg); }
		60% { transform: rotate(-4deg); }
		75% { transform: rotate(2deg); }
		85% { transform: rotate(-2deg); }
		92% { transform: rotate(1deg); }
		100% { transform: rotate(0); }
	}
	div {
		position: absolute;
		top: -0.6em;
		right: -0.6em;
		background: red;
		width: 1.5em;
		height: 1.5em;
		font-size: 1em;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
export default NotificationBellWrapper;