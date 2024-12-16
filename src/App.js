import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Tournaments from './components/tournament/Tournaments';
import Players from './components/player/Players';
import Leaderboards from './components/leaderboard/Leaderboards';
import AddTournament from './components/tournament/AddTournament';
import Tournament from './components/tournament/Tournament';
import Player from './components/player/Player';
import LanguageSwitcher from './components/languageSwitcher/LanguageSwitcher';
import i18n from './components/i18n';
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
          <Route path="/add-tournament" component={AddTournament} />
          <Route path="/tournament/:id" component={Tournament} />
          <Route path="/player/:id" component={Player} />
        </Switch>
        <div>
            <LanguageSwitcher />
        </div>
      </div>
    </Router>
  );
};

export default App;