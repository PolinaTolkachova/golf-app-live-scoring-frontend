// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tournaments from './components/Tournaments';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Tournaments} />
                    {/* Add other routes here if needed */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;