import React from "react";
import {PropTypes} from "prop-types";
import { AppBar, Toolbar } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../actions/authActions';
import styles from "../css/header.module.css"

export function Header(props) {

	const unauthenticate = () => {
    localStorage.isLoggedIn = false;
		props.logOut();
	}

	return (
    <>
      <AppBar elevation={4} className={styles.toolbar} position="static" color="primary">
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
                  className={styles.button}
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
    logOut: PropTypes.func.isRequired
  }

export const HeaderWithConnect = connect(
  null,
  {logOut}
)(Header)
