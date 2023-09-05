import NotificationBellWrapper from '../styled/components/NotificationBellWrapper';
import { IoNotificationsOutline } from 'react-icons/io5';

const NotificationBell = ({count = 0, onClick, id}) => {
	return (
		<NotificationBellWrapper id={id} onClick={onClick}>
			<IoNotificationsOutline size="2em" title="View New Notifications" />
			<div>{count}</div>
		</NotificationBellWrapper>
	);
};

export default NotificationBell;