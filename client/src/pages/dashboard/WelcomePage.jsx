import WelcomeWrapper from "../../styled/pages/dashboard/WelcomeWrapper";
import welcomeImg from '../../assets/images/dashboard/welcome.svg';
import { useContext } from "react";
import AppContext from "../../main";

const WelcomePage = () => {
	const { applicationName } = useContext(AppContext);
	return (
		<WelcomeWrapper>
			<h1>Welcome!</h1>
			<p>{applicationName} is your organization's event manager.</p>
			<img src={welcomeImg} title="Welcome Image" />
		</WelcomeWrapper>
	)
};

export default WelcomePage;