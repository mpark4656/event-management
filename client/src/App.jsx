import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import {
	MainLayout,
	LandingPage,
	RegisterPage,
	LoginPage,
	DashboardLayout,
	ErrorPage
} from './pages';
import { loginAction } from './pages/LoginPage';
import { registerAction } from './pages/RegisterPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout/>,
		errorElement: <ErrorPage/>,
		children: [{
			index: true,
			element: <LandingPage/>
		},{
			path: 'register',
			element: <RegisterPage/>,
			action: registerAction
		},{
			path: 'login',
			element: <LoginPage/>,
			action: loginAction
		},{
			path: 'dashboard',
			element: <DashboardLayout/>
		}]
	}
]);

function App() {
	return (
		<RouterProvider router={router} fallbackElement={<div>some spinner</div>} />
	)
}

export default App
