import React, {useState} from 'react';
import {ProfileWithAuth} from './Profile';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {withAuth} from '../AuthContext';
import {Header} from "./Header";

const PAGES = {
  home: (props) => <HomeWithAuth {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
};

export function App(props) {
  const [state, setState] = useState({currentPage: "home"})

  const navigateToPage = (page) => {
    if (props.isLoggedIn) {
      setState({currentPage: page});
    } else {
      setState({currentPage: 'home'});
    }
  };

  const { currentPage } = state;
  const Page = PAGES[currentPage];
  return (
    <>
      {props.isLoggedIn ? (
        <>
          <Header {...props} navigate={navigateToPage} />
          <Page navigate={navigateToPage}/>
        </>
      ) : (
        <HomeWithAuth {...props} navigate={navigateToPage}/>
      )}
    </>
  )
}

export default withAuth(App);
