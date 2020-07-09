import React from "react";
import {PropTypes} from "prop-types";

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
		return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.props.navigate("map");
                  }}
                >
                  Карта
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.props.navigate("profile");
                  }}
                >
                  Профиль
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.unauthenticate();
                  }}
                >
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
	}
}
