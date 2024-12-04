# UI Structure

1. [Introduction](#introduction)
2. [UI Components](#ui-components)
    1. [Navigation Menu](#navigation-menu)
    2. [User Interface](#user-interface)
    3. [Administrator Interface](#administrator-interface)
    4. [Player Interface](#player-interface)
3. [Use Cases](#use-cases)
    - [User Use Cases](#user-use-cases)
    - [Administrator Use Cases](#administrator-use-cases)
    - [Player Use Cases](#player-use-cases)

## UI Components

### Navigation Menu

- **Home**
- **Tournaments**
- **Leaderboard**
- **Registration**
- **Login**
- **Player Profiles** (Admins only)
- **Tournament Management** (Admins only)

### User Interface

#### Tournaments Page

- **Components:**
    - List of tournaments
    - Tournament details (participants, groups, scorecards, etc.)
- **Interactions:**
    - Click on a tournament for details

#### Leaderboard Page

- **Components:**
    - Table of players with scores, points, rankings
- **Features:**
    - Real-time updating

#### Registration Page

- **Components:**
    - Registration form (name, email, password, etc.)
    - Submit button
- **Outcome:**
    - Confirmation message

#### Login Page

- **Components:**
    - Login form (username, password)
    - Submit button
- **Outcome:**
    - Redirects to home page upon successful login

### Administrator Interface

#### Players' Page

- **Components:**
    - List of players
- **Features:**
    - View player profiles

#### Edit Player Page

- **Components:**
    - Player form (add, edit, remove fields)
    - Action buttons (Save, Delete)

#### Edit Tournament Page

- **Components:**
    - Tournament form (add, edit, remove fields)
    - Player management section
    - Scorecards section

### Player Interface

#### Enter Tournament Scores Page

- **Components:**
    - Score entry fields for each hole fora a particular tournament
    - Submit and Edit buttons
