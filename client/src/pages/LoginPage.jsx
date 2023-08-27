import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const initialState = {
	value: '',
	valid: true
};

const LoginPage = () => {
	const [usernameState, setUsernameState] = useState(initialState);
	const [passwordState, setPasswordState] = useState(initialState);
	const submitForm = (event) => {
		event.preventDefault();
	}
	return (
		<LoginRegisterWrapper>
			<form onSubmit={submitForm} method="post">
				<img src={logo}></img>
				<h1>Login</h1>
				<BasicTextField
					label="username" id="username" type="text"
					icon={FaUser} name="username" placeholder="Type your username"
					fieldState={usernameState} setFieldState={setUsernameState} required
				/>
				<BasicTextField
					label="password" id="password" type="password"
					icon={RiLockPasswordLine} name="password" placeholder="Type your password"
					fieldState={passwordState} setFieldState={setPasswordState} required
				/>
				<div className="bottom-group">
					<BasicButton type="submit" label="login" className="btn-primary" />
					<p>
						Don't have an account?
						<Link to="/register" className="link-btn">register</Link>
					</p>
				</div>
			</form>
		</LoginRegisterWrapper>
	);
};

export default LoginPage;