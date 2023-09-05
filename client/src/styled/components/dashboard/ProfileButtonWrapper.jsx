import styled from 'styled-components';

const ProfileButtonWrapper = styled.button`
	&:hover {
		color: var(--primary-900);
	}
	cursor: pointer;
	padding: 0.5em 1.5em;
	display: flex;
	gap: 1em;
	background-color: var(--primary-400);
	color: var(--white);
	border-radius: 50px;
	border: none;
	font-size: 1em;
	text-transform: capitalize;
`;

export default ProfileButtonWrapper;