import React from 'react';
import {ProfileWithAuth} from './Profile';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {withAuth} from './AuthContext';

const PAGES = {
  home: (props) => <HomeWithAuth {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: 'home' });
    }
  };

  render() {
    const { currentPage } = this.state;
    const Page = PAGES[currentPage];

    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("home");
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Map
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Page navigate={this.navigateTo}/>
        </main>
      </>
    );
  }
}

export {App};
export default withAuth(App);

