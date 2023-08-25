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
			element: <RegisterPage/>
		},{
			path: 'login',
			element: <LoginPage/>
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
