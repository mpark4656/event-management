import LoginWrapper from '../styled/pages/LoginWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<LoginWrapper>
			<section>
				<img src={logo}></img>
				<h1>Login</h1>
				<BasicTextField
					label="username" id="username" type="text"
					icon={FaUser} name="username" placeholder="Type your username"
				/>
				<BasicTextField
					label="password" id="password" type="password"
					icon={RiLockPasswordLine} name="password" placeholder="Type your password"
				/>
				<div className="bottom-group">
					<BasicButton type="button" label="login" secondaryClass="primary"/>
					<p>
						Don't have an account?
						<Link to="/register" className="link-btn">Register</Link>
					</p>
				</div>
			</section>
		</LoginWrapper>
	);
};

export default LoginPage;