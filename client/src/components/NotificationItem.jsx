import NotificationItemWrapper from '../styled/components/NotificationItemWrapper';
import { IoCloseOutline } from 'react-icons/io5';
import { TfiAnnouncement } from 'react-icons/tfi';
import { RiCalendarEventLine, RiComputerLine } from 'react-icons/ri';

const getTimestampStr = (seconds) => {
	let res = '';
	const days = Math.floor(seconds / 60 / 60 / 24);
	const hours = Math.floor(seconds / 60 / 60);
	const minutes = Math.floor(seconds / 60);
	if(days) {
		res += days + 'd ';
		seconds -= 60 * 60 * 14 * days;
	}
	if(hours) {
		res += hours + 'h ';
		seconds -= 60 * 60 * hours;
	}
	if(minutes) {
		res += minutes + 'm ';
		seconds -= 60 * minutes;
	}
	res += Math.round(seconds) + 's ago';
	return res;
};

const NotificationItem = ({ notification, removeNotificationItem }) => {
	const removeThisItem = () => {
		removeNotificationItem(notification._id);
	};
	const seconds = (new Date() - notification.datetime) / 1000;
	const timestampStr = getTimestampStr(seconds);
	return (
		<NotificationItemWrapper>
			<div className="main-body">
				{notification.type === 'announcement' && <TfiAnnouncement />}
				{notification.type === 'event' && <RiCalendarEventLine />}
				{notification.type === 'system' && <RiComputerLine />}
				<p className="title">{notification.title}</p>
				<p>{notification.message}</p>
				<p className="timestamp">{timestampStr}</p>
			</div>
			<div className="close-btn-container" onClick={removeThisItem}>
				<IoCloseOutline size="1.2em" />
			</div>
		</NotificationItemWrapper>
	);
}

export default NotificationItem;