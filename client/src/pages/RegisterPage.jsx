import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { AiOutlineMail } from 'react-icons/ai';
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

const RegisterPage = () => {
	const [emailState, setEmailState] = useState(initialState);
	const [usernameState, setUsernameState] = useState(initialState);
	const [passwordState, setPasswordState] = useState(initialState);
	const [confirmPasswordState, setConfirmPasswordState] = useState(initialState);
	const submitForm = (event) => {
		event.preventDefault();
		let errMessage = '';
		if(confirmPasswordState.value !== passwordState.value) {
			setConfirmPasswordState({...confirmPasswordState, valid: false});
			errMessage = 'Passwords do not match';
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
			<form onSubmit={submitForm} method="post">
				<img src={logo}></img>
				<h1>Register</h1>
				<BasicTextField
					label="email" id="email" type="email"
					icon={AiOutlineMail} name="email" placeholder="Type your email"
					fieldState={emailState} setFieldState={setEmailState} required
				/>
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
				<BasicTextField
					label="confirm password" id="password-confirm" type="password"
					icon={RiLockPasswordLine} name="password-confirm" placeholder="Re-type your password"
					fieldState={confirmPasswordState} setFieldState={setConfirmPasswordState} required
				/>
				<div className="bottom-group">
					<BasicButton type="submit" label="register" className="btn-primary" />
					<p>
						Already have an account?
						<Link to="/login" className="link-btn">login</Link>
					</p>
				</div>
			</form>
		</LoginRegisterWrapper>
	);
};

export default RegisterPage;