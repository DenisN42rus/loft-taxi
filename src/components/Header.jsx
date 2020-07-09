import React from "react";
import {PropTypes} from "prop-types";
import { AppBar, Toolbar } from '@material-ui/core';

export class Header extends React.Component {

	static propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }

	unauthenticate = () => {
		this.props.logOut();
		this.props.navigate("home");
	}

	render() {
    const toolbarStyle = {
      backgroundColor: "#fff"
    }
    const buttonStyle = {
      border: "none",
      background: "#fff",
      borderRadius: "5px",
      outline: "none"
    }
		return (
      <>
        <AppBar elevation={4} style={toolbarStyle} position="static" color="primary">
          <Toolbar>
            <nav>
              <ul>
                <li>
                  <button
                    style={buttonStyle}
                    onClick={() => {
                      this.props.navigate("map");
                    }}
                  >
                    Карта
                  </button>
                </li>
                <li>
                  <button
                    style={buttonStyle}
                    onClick={() => {
                      this.props.navigate("profile");
                    }}
                  >
                    Профиль
                  </button>
                </li>
                <li>
                  <button
                    style={buttonStyle}
                    onClick={() => {
                      this.unauthenticate();
                    }}
                  >
                    Выйти
                  </button>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </>
    )
	}
}
