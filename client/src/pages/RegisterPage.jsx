import LoginRegisterWrapper from '../styled/pages/LoginRegisterWrapper';
import logo from '../assets/images/logo.png';
import BasicTextField from '../components/BasicTextField';
import BasicButton from '../components/BasicButton';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { Form, useNavigation, Link } from 'react-router-dom';

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
	return (
		<LoginRegisterWrapper>
			<Form method="post">
				<img src={logo}></img>
				<h1>Register</h1>
				<BasicTextField
					label="email" id="email" type="email"
					icon={AiOutlineMail} name="email" placeholder="Enter your email" required
				/>
				<BasicTextField
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