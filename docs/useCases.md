## Use Cases

1. [Use Cases](#use-cases)
    - [User Use Cases](#user-use-cases)
        - [1. View Tournaments](#1-view-tournaments)
        - [2. View Leaderboard](#2-view-leaderboard)
        - [3. Registration](#3-registration)
        - [4. Login](#4-login)
    - [Administrator Use Cases](#administrator-use-cases)
        - [5. View Players' Profiles](#5-view-players-profiles)
        - [6. Manage Players' Profiles](#6-manage-players-profiles)
        - [7. Manage Tournament](#7-manage-tournament)
        - [8. Manage Players for Tournaments](#8-manage-players-for-tournaments)
    - [Player Use Cases](#player-use-cases)
        - [9. Enter Tournament Scores](#9-enter-tournament-scores)

### User Use Cases

#### 1. View Tournaments

- **Primary Actor:** User
- **Preconditions:** None
- **Trigger:** User navigates to the tournaments page.

**Main Success Scenario:**
1. Accesses the tournaments page.
2. Views a list of all tournaments.
3. Selects a tournament to view details:
    - Views participants.
    - Views players categorized by groups.
    - Views scorecards.
    - Views total scores and individual hole scores for a particular player.

#### 2. View Leaderboard

- **Primary Actor:** User
- **Preconditions:** None
- **Trigger:** User navigates to the leaderboard page.

**Main Success Scenario:**
1. Accesses the leaderboard page for a tournament.
2. Views the list of all players in the tournament.
3. Views scorecards.
4. Sees real-time updates of scores, points, and rankings.

#### 3. Registration

- **Primary Actor:** User
- **Preconditions:** None
- **Trigger:** User navigates to the registration page.

**Main Success Scenario:**
1. Accesses the registration page.
2. Completes the registration form.
3. Submits registration information.
4. System confirms registration.

#### 4. Login

- **Primary Actor:** User
- **Preconditions:** User is registered.
- **Trigger:** User navigates to the login page.

**Main Success Scenario:**
1. Accesses the login page.
2. Inputs valid credentials.
3. System authenticates the user.
4. Gains access to the application.

### Administrator Use Cases

#### 5. View Players' Profiles

- **Primary Actor:** Administrator
- **Preconditions:** Administrator is logged in.
- **Trigger:** Navigates to the players' page.

**Main Success Scenario:**
1. Accesses the players' page.
2. Views a list of all registered players.

#### 6. Manage Players' Profiles

- **Primary Actor:** Administrator
- **Preconditions:** Administrator is logged in.
- **Trigger:** Navigates to the edit player page.

**Main Success Scenario:**
1. Accesses the edit player page.
2. Adds, edits, or removes players.

#### 7. Manage Tournament

- **Primary Actor:** Administrator
- **Preconditions:** Administrator is logged in.
- **Trigger:** Navigates to the tournaments page.

**Main Success Scenario:**
1. Accesses the tournaments page.
2. Manages tournaments:
    - Views all tournaments.
    - Adds, edits, or removes tournaments.

#### 8. Manage Players for Tournaments

- **Primary Actor:** Administrator
- **Preconditions:** Administrator is logged in.
- **Trigger:** Navigates to the edit tournament page.

**Main Success Scenario:**
1. Accesses the edit tournament page.
2. Manages players in the tournament:
    - Adds, edits, or removes players.
    - Manages scores and scorecards.



### Player Use Cases

#### 9. Enter Tournament Scores

- **Primary Actor:** Player
- **Preconditions:** Player is logged in and part of a tournament.
- **Trigger:** Participates in an active tournament.

**Main Success Scenario:**
1. Selects the active tournament.
2. Input and submit scores for themselves and their flight members for a hole.

**Extension:**
- Edits scores before the round is finalized.