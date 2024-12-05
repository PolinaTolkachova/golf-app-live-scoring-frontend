import React from 'react'; // Import the main React library to use JSX and create React components
import ReactDOM from 'react-dom'; // Import ReactDOM to render React components to the DOM
import App from './App'; // Import the main App component, which serves as the root component of the application

// Use ReactDOM to render the main application component into the DOM
ReactDOM.render(
    // <React.StrictMode> is a tool for highlighting potential problems in an application
    // It activates additional checks and warnings for its descendants,
    // helping identify unsafe practices and deprecated APIs during development.
    <React.StrictMode>
        <App /> {/* Render the App component inside React.StrictMode for enhanced error detection during development */}
    </React.StrictMode>,
    document.getElementById('root') // Find the DOM element with the id 'root' and use it as the mounting point for the React application
);