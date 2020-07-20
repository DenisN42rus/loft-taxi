import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
		  <BrowserRouter>
			  <React.StrictMode>
				    <App />
			  </React.StrictMode>
		  </BrowserRouter>
	  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
