import logoImg from '../assets/images/logo.png';
import LogoWrapper from '../styled/components/LogoWrapper';

const Logo = ({className}) => {
	return (
		<LogoWrapper>
			<img src={logoImg} />
			<span className={className}>event manager</span>
		</LogoWrapper>
	);
}

export default Logo;