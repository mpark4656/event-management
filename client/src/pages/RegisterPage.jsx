import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import IconTextField from '../components/IconTextField';
import BasicButton from '../components/BasicButton';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { Form, useNavigation, Link, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch.js';

export const loader = async () => {
	try {
		await customFetch.get('/current-user');
		return redirect('/dashboard');
	} catch (error) {
		return error;
	}
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
	return (
		<LoginRegisterWrapper>
			<Form method="post">
				<img src={logo} alt="Event.io Logo" />
				<h1>Register</h1>
				<IconTextField
					label="email" id="email" type="email"
					icon={AiOutlineMail} name="email" placeholder="Enter your email" required
				/>
				<IconTextField
					label="name" id="name" type="text"
					icon={FaUser} name="name" placeholder="Enter your name" required
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