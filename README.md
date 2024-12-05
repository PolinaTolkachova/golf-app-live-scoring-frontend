# Live Scoring Golf Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
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

## Installation

To set up the Live Scoring Golf Application frontend, follow these steps:

1. **Clone the Repository**:

   Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-repo/live-scoring-golf-app-frontend.git
   cd live-scoring-golf-app-frontend
   ```

2. **Install Dependencies**:

   Install all necessary dependencies using npm:

   ```bash
   npm install
   npm install axios
   npm install react-router-dom@5
   npm install http-proxy-middleware
   set NODE_OPTIONS=--openssl-legacy-provider
   ```

   *Note*: The `NODE_OPTIONS=--openssl-legacy-provider` is included in case you encounter OpenSSL issues during development with certain Node.js versions.

## Usage

To start using the application frontend, execute the following:

1. **Launch the Development Server**:

   Start the application server to begin development and testing:

   ```bash
   npm start
   ```

2. **Open the Application in Your Browser**:

   Navigate to `http://localhost:3000` in your web browser to access the application.

## License

This project is licensed under the [BSD 3-Clause License](LICENSE).