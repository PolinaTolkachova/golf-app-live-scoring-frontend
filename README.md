# Live Scoring Golf Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Backend Application](#backend-application)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Overview
The **Live Scoring Golf Application** is a platform for golf enthusiasts to view tournaments, check live leaderboards, manage player scores, and more.

## Features
- **Tournaments:** View details of current and upcoming tournaments.
- **Leaderboards:** Receive real-time updates on player rankings.
- **Player Profiles:** Admins can add, edit, and organize player profiles and assign them to tournament groups.
- **Score Management:** Players can enter scores for each hole during tournaments.

## Backend Application
The functionality of the Live Scoring Golf Application is powered by a robust backend. The backend application is implemented in Java and uses Spring Boot for building RESTful services. It interacts with a MySQL database and provides data to the frontend through well-defined APIs.

### Key Technologies
- **Java and Spring Boot:** Serve as the primary technologies for building and managing the backend services.
- **MySQL:** Used as the relational database to store and manage application data.
- **Maven:** For building and managing project dependencies.

### Integration
The backend provides RESTful APIs that the frontend consumes to perform operations like retrieving tournament data, updating player profiles, and managing scores. Ensure the backend is running before starting the frontend to enable proper API communication.

For more details and setup instructions, visit the [Backend GitHub Repository](https://github.com/PolinaTolkachova/golf-app-live-scoring-backend).

## Installation
To set up the Live Scoring Golf Application frontend, follow these steps:

1. **Clone the Repository**: Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-repo/live-scoring-golf-app-frontend.git
   cd live-scoring-golf-app-frontend
   ```

2. **Install Dependencies**: Install all necessary dependencies using npm:
   ```bash
   npm install -g yarn
   npm yarn
   ```

## Usage
To start using the application frontend, execute the following:

1. **Launch the Development Server**: Start the application server to begin development and testing:
   ```bash
   npm start
   ```

2. **Open the Application in Your Browser**: Navigate to `http://localhost:3000` in your web browser to access the application.

## License
This project is licensed under the [BSD 3-Clause License](LICENSE).