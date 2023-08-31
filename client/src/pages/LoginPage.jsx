import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Form, useNavigation, redirect, Link } from 'react-router-dom';

export const loginAction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	// Placeholder until server logic is done
	console.log(data);
	return null;
}

const LoginPage = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state == 'submitting';
	
	return (
		<LoginRegisterWrapper>
			<Form method="post">
				<img src={logo}></img>
				<h1>Login</h1>
				<BasicTextField
					label="username" id="username" type="text"
					icon={FaUser} name="username" placeholder="Type your username" required
				/>
				<BasicTextField
					label="password" id="password" type="password"
					icon={RiLockPasswordLine} name="password" placeholder="Type your password" required
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