import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Form, useNavigation, redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

const initialState = {
	value: '',
	valid: true
};

export const registerAction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	// Placeholder until server logic is done
	console.log(data);
	return null;
}

const RegisterPage = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state == 'submitting';
	const [passwordState, setPasswordState] = useState(initialState);
	const [confirmPasswordState, setConfirmPasswordState] = useState(initialState);
	const submitForm = (event) => {
		if(confirmPasswordState.value !== passwordState.value) {
			event.preventDefault();
			setConfirmPasswordState({...confirmPasswordState, valid: false});
			toast.error('Passwords do not match', {
				position: toast.POSITION.TOP_CENTER,
				toastId: 'form-invalid-error'
			});
		}
	}
	return (
		<LoginRegisterWrapper>
			<Form onSubmit={submitForm} method="post">
				<img src={logo}></img>
				<h1>Register</h1>
				<BasicTextField
					label="email" id="email" type="email"
					icon={AiOutlineMail} name="email" placeholder="Type your email" required
				/>
				<BasicTextField
					label="username" id="username" type="text"
					icon={FaUser} name="username" placeholder="Type your username" required
				/>
				<BasicTextField
					label="password" id="password" type="password"
					icon={RiLockPasswordLine} name="password" placeholder="Type your password" required
					fieldState={passwordState} setFieldState={setPasswordState}
				/>
				<BasicTextField
					label="confirm password" id="password-confirm" type="password"
					icon={RiLockPasswordLine} name="password-confirm" placeholder="Re-type your password" required
					fieldState={confirmPasswordState} setFieldState={setConfirmPasswordState}
				/>
				<div className="bottom-group">
					<BasicButton type="submit" label="register" className="btn-primary" disabled={isSubmitting} disabledLabel="submitting..."/>
					<p>
						Already have an account?
						<Link to="/login" className="link-btn">login</Link>
					</p>
				</div>
			</Form>
		</LoginRegisterWrapper>
	);
};

export default RegisterPage;