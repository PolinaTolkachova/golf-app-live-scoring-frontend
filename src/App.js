import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Tournaments from './components/tournament/Tournaments';
import Players from './components/player/Players';
import Leaderboards from './components/leaderboard/Leaderboards';
import Leaderboard from './components/leaderboard/Leaderboard';
import AddTournament from './components/tournament/AddTournament';
import Tournament from './components/tournament/Tournament';
import TournamentPlayer from './components/tournament/TournamentPlayer';
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
            <Route path="/tournament/:tournamentId/player/:playerId" component={TournamentPlayer} />
            <Route path="/tournament/:id" component={Tournament} />
            <Route path="/add-tournament" component={AddTournament} />
            <Route path="/player/:id" component={Player} />
            <Route path="/leaderboard/:id" component={Leaderboard} />
        </Switch>
        <div>
            <LanguageSwitcher />
        </div>
      </div>
    </Router>
  );
};

export default App;