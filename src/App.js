import React from 'react'; // Import React to use JSX and create components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import routing components from react-router-dom
import Tournaments from './components/Tournaments'; // Import the Tournaments component for displaying tournaments

// Main App component
const App = () => {
    return (
        // Router component to enable routing in the application
        <Router>
            <div>
                {/* Switch component renders the first matching route */}
                <Switch>
                    {/* Route component for the home path ("/"), renders Tournaments component when path is exactly matched */}
                    <Route path="/" exact component={Tournaments} />
                    {/* Add other routes here if needed, for example:
                        <Route path="/about" component={About} />
                     */}
                </Switch>
            </div>
        </Router>
    );
};

// Export the App component as the default export
export default App;