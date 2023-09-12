import logoImg from '../assets/images/logo.png';
import LogoWrapper, { NavigateLogoWrapper } from '../styled/components/LogoWrapper';
import { useNavigate } from 'react-router-dom';
import AppContext from '../main';
import { useContext } from 'react';

const Logo = ({className, theme, to}) => {
	const { applicationName } = useContext(AppContext);
	if(to) {
		const navigate = useNavigate();
		const onClickHandler = () => {
			navigate(to);
		};
		return (
			<NavigateLogoWrapper className={className} onClick={onClickHandler}>
				<img src={logoImg} alt="Event.io Logo" />
				<span className={theme}>{applicationName}</span>
			</NavigateLogoWrapper>
		);
	} else {
		return (
			<LogoWrapper className={className}>
				<img src={logoImg}/>
				<span className={theme}>{applicationName}</span>
			</LogoWrapper>
		);
	}
}

export default Logo;