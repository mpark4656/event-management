import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import { toast } from 'react-toastify';
import logo from '../assets/images/logo.png';
import IconTextField from '../components/IconTextField';
import BasicButton from '../components/BasicButton';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { Form, useNavigation, redirect, Link } from 'react-router-dom';
import customFetch from '../utils/customFetch.js';

export const loader = async () => {
	try {
		await customFetch.get('/current-user');
		return redirect('/dashboard');
	} catch (error) {
		return error;
	}
};

export const loginAction = async ({ request }) => {
	try {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		await customFetch.post('/login', data);
		toast.success('Successfully logged in', {toastId: 'toast-login-success'});
		return redirect('/dashboard');
	} catch(err) {
		toast.error(err.response.data.msg, {toastId: 'toast-login-error'});
		return err;
	}
}

const LoginPage = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state == 'submitting';
	
	return (
		<LoginRegisterWrapper>
			<Form method="post">
				<img src={logo} alt="Event.io Logo" />
				<h1>Login</h1>
				<IconTextField
					label="email" id="email" type="email"
					icon={AiOutlineMail} name="email" placeholder="Email address" required
				/>
				<IconTextField
					label="password" id="password" type="password"
					icon={RiLockPasswordLine} name="password" placeholder="Password" required
				/>
				<div className="bottom-group">
					<BasicButton type="submit" label="login" className="btn-primary" disabled={isSubmitting} disabledLabel="submitting" />
					<p>
						Don't have an account?
						<Link to="/register" className="link-btn">register</Link>
					</p>
				</div>
			</Form>
		</LoginRegisterWrapper>
	);
};

export default LoginPage;