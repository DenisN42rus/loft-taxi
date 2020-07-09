import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from "./AuthContext";
import './index.css';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	  <React.StrictMode>
	  	<AuthProvider>
		    <App />
	  	</AuthProvider>
	  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);
