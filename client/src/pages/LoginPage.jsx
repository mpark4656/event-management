import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const initialState = {
	value: '',
	valid: true
};

const LoginPage = () => {
	const [usernameState, setUsernameState] = useState(initialState);
	const [passwordState, setPasswordState] = useState(initialState);
	const validate = () => {
		let errMessage = '';
		if(!usernameState.value) {
			setUsernameState({...usernameState, valid: false});
			errMessage = 'Username and password are required';
		}
		if(!passwordState.value) {
			setPasswordState({...passwordState, valid: false});
			errMessage = 'Username and password are required';
		}
		if(errMessage) {
			toast.error(errMessage, {
				position: toast.POSITION.TOP_CENTER,
				toastId: 'form-invalid-error'
			});
		}
	}
	return (
		<LoginRegisterWrapper>
			<ToastContainer />
			<section>
				<img src={logo}></img>
				<h1>Login</h1>
				<BasicTextField
					label="username" id="username" type="text"
					icon={FaUser} name="username" placeholder="Type your username"
					fieldState={usernameState} setFieldState={setUsernameState}
				/>
				<BasicTextField
					label="password" id="password" type="password"
					icon={RiLockPasswordLine} name="password" placeholder="Type your password"
					fieldState={passwordState} setFieldState={setPasswordState}
				/>
				<div className="bottom-group">
					<BasicButton type="button" label="login" className="btn-primary" onClick={validate} />
					<p>
						Don't have an account?
						<Link to="/register" className="link-btn">register</Link>
					</p>
				</div>
			</section>
		</LoginRegisterWrapper>
	);
};

export default LoginPage;