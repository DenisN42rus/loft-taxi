import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from "./AuthContext";
import './index.css';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	  <BrowserRouter>
		  <React.StrictMode>
		  	<AuthProvider>
			    <App />
		  	</AuthProvider>
		  </React.StrictMode>
	  </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
