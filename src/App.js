import React from 'react';
import {Profile} from './Profile';
import {Home} from './Home';
import {Map} from './Map';

const PAGES = {
  home: Home,
  profile: Profile,
  map: Map,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
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
          <Page navigateTo={this.navigateTo} />
        </main>
      </>
    );
  }
}

export default App;

