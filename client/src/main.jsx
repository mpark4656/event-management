import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';

const AppContext = createContext();

const applicationName = 'Event.io';
const darkModePref = localStorage.getItem("darkTheme") === "true";
const saveDarkModePref = (isDarkMode) => {
	localStorage.setItem("darkTheme", isDarkMode ? "true" : "false");
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppContext.Provider value={{darkModePref, saveDarkModePref, applicationName}}>
			<ToastContainer />
			<App />
		</AppContext.Provider>
	</React.StrictMode>
);

export default AppContext;