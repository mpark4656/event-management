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
	AccountPage,
	ConfigurationPage,
	EventPage,
	NoticeAdminPage,
	NotificationPage,
	OrganizationPage,
	ProfilePage,
	ReportPage,
	ResourcePage,
	WelcomePage,
	ErrorPage
} from './pages';
import { loginAction } from './pages/LoginPage';
import { registerAction } from './pages/RegisterPage';
import { loader as dashboardLayoutLoader } from './pages/DashboardLayout';

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
			element: <DashboardLayout/>,
			loader: dashboardLayoutLoader,
			children: [{
				index: true,
				element: <WelcomePage/>
			},{
				path: 'profile',
				element: <ProfilePage />
			},{
				path: 'notification',
				element: <NotificationPage />
			},{
				path: 'event',
				element: <EventPage />
			},{
				path: 'resource',
				element: <ResourcePage />
			},{
				path: 'report',
				element: <ReportPage />
			},{
				path: 'account',
				element: <AccountPage />
			},{
				path: 'notice-admin',
				element: <NoticeAdminPage />
			},{
				path: 'organization',
				element: <OrganizationPage />
			},{
				path: 'configuration',
				element: <ConfigurationPage />
			}]
		}]
	}
]);

function App() {
	return (
		<RouterProvider router={router} fallbackElement={<div>some spinner</div>} />
	)
}

export default App
