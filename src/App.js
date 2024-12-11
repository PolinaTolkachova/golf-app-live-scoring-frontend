import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Tournaments from './components/Tournaments';
import Players from './components/Players';
import Leaderboards from './components/Leaderboards';

// Define the main App component
const App = () => {
  return (
    // Wrap the application in the Router component to handle routing
    <Router>
      <div>
        {/* Define the navigation bar with links to different routes */}
        <nav>
          <ul>
            <li>
              {/* NavLink for the Tournaments component, becomes active on exact path */}
              <NavLink exact to="/" activeClassName="active">
                Tournaments
              </NavLink>
            </li>
            <li>
              {/* NavLink for the Players component, becomes active on /players path */}
              <NavLink to="/players" activeClassName="active">
                Players
              </NavLink>
            </li>
            <li>
              {/* NavLink for the Players component, becomes active on /players path */}
              <NavLink to="/leaderboards" activeClassName="active">
                Leaderboards
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Define the routes for the application */}
        <Switch>
          {/* Route for the Tournaments component at the root path */}
          <Route path="/" exact component={Tournaments} />
          {/* Route for the Players component at the /players path */}
          <Route path="/players" component={Players} />
          {/* Route for the Players component at the /players path */}
          <Route path="/leaderboards" component={Leaderboards} />
        </Switch>
      </div>
    </Router>
  );
};

// Export the App component as the default export
export default App;