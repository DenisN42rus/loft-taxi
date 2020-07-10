import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from "./AuthContext";
import './index.css';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
		  <BrowserRouter>
			  <React.StrictMode>
			  	<AuthProvider>
				    <App />
			  	</AuthProvider>
			  </React.StrictMode>
		  </BrowserRouter>
	  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
