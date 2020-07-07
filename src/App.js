import React, {useState} from 'react';
import {ProfileWithAuth} from './Profile';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {withAuth} from './AuthContext';

const PAGES = {
  home: (props) => <HomeWithAuth {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
};

function App(props) {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    if (props.isLoggedIn) {
      setCurrentPage(page);
    } else {
      setCurrentPage("home");
    }
  };

    const Page = PAGES[currentPage];

    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    navigateTo("home");
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("profile");
                  }}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("map");
                  }}
                >
                  Map
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Page navigate={navigateTo}/>
        </main>
      </>
    );
  }

export {App};
export default withAuth(App);

