import React from 'react';
import {withAuth} from './AuthContext';
import {Link, Switch} from 'react-router-dom';
import {routes, RouteWithSubRoutes} from "./routes";

const App = () => (
  <>
    <header>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Map">Map</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
       {routes.map(route => (
        <RouteWithSubRoutes 
          key={route.path}
          {...route}
        />
       ))}
      </Switch>
    </main>
  </>
);

export {App};
export default withAuth(App);

