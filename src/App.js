import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Tournaments from './components/tournament/Tournaments';
import Players from './components/player/Players';
import Leaderboards from './components/leaderboard/Leaderboards';
import AddTournament from './components/tournament/AddTournament';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Tournaments
              </NavLink>
            </li>
            <li>
              <NavLink to="/players" activeClassName="active">
                Players
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboards" activeClassName="active">
                Leaderboards
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Tournaments} />
          <Route path="/players" component={Players} />
          <Route path="/leaderboards" component={Leaderboards} />
          <Route path="/add-tournament" component={AddTournament} /> {/* New Route for AddTournament */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;