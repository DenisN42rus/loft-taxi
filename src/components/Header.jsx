import React from "react";
import {PropTypes} from "prop-types";
import { AppBar, Toolbar } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../actions/authActions';

function Header(props) {

	const unauthenticate = () => {
		props.logOut();
		props.history.replace("home")
	}
  
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
                <Link to="/Map">Карта</Link>
              </li>
              <li>
                <Link to="/Profile">Профиль</Link>
              </li>
              <li>
                <button
                  style={buttonStyle}
                  onClick={() => {
                    unauthenticate();
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

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func.isRequired
  }

export default connect(
  null,
  {logOut}
)(Header)
