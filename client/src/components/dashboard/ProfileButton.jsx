import { FaUser } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import ProfileButtonWrapper from '../../styled/components/dashboard/ProfileButtonWrapper';

const ProfileButton = ({user, id, onClick}) => {
	// Temporary name
	const displayName = user.name;
	return (
		<ProfileButtonWrapper id={id} onClick={onClick}>
			<FaUser />{displayName}<AiFillCaretDown/>
		</ProfileButtonWrapper>
	);
}

export default ProfileButton;