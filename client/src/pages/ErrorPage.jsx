import img from '../assets/images/error-404.svg';
import ErrorWrapper from '../styled/pages/ErrorWrapper';

const ErrorPage = () => {
	return (
		<ErrorWrapper>
			<img src={img} title="404 not found"></img>
			<h1>page not found</h1>
			<p>Please make sure the URL is correct.</p>
		</ErrorWrapper>
	);
};

export default ErrorPage;