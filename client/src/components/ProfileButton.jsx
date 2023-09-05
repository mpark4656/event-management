import { FaUser } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import ProfileButtonWrapper from '../styled/components/ProfileButtonWrapper';

const ProfileButton = ({user, id, onClick}) => {
	// Temporary name
	const displayName = user.firstName;
	return (
		<ProfileButtonWrapper id={id} onClick={onClick}>
			<FaUser />{displayName}<AiFillCaretDown/>
		</ProfileButtonWrapper>
	);
}

export default ProfileButton;