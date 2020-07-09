import React from 'react';
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

class App extends React.Component {
  state = { currentPage: "home" };

  navigateToPage = (page) => {
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
        {this.props.isLoggedIn ? (
          <>
            <Header {...this.props} navigate={this.navigateToPage} />
            <Page navigate={this.navigateToPage}/>
          </>
        ) : (
          <HomeWithAuth {...this.props} navigate={this.navigateToPage}/>
        )}
      </>
    )
  }
}

export {App};
export default withAuth(App);
