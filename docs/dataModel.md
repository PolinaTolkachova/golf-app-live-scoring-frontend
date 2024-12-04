# Data Model

## Table of Contents
- [Entities and Attributes](#entities-and-attributes)
    - [User](#user)
    - [Administrator](#administrator)
    - [Player](#player)
    - [Tournament](#tournament)
    - [Leaderboard](#leaderboard)
    - [Scorecard](#scorecard)

## Entities and Attributes

### User
- **Attributes:**
    - `UserID`: Unique identifier for each user.
    - `Username`: The login name used by the user.
    - `Password`: Hashed password for security.
    - `Email`: Contact email address.
    - `Role`: User's role (regular user, admin, player).
- **Relationships:**
    - Each User can be associated with one **Player Profile**.

### Administrator
- **Attributes:**
    - `AdminID`: Unique identifier for each administrator.
    - `UserID`: Foreign key linking to the **User** entity.
- **Relationships:**
    - An Administrator can manage multiple **Players** and **Tournaments**.

### Player
- **Attributes:**
    - `PlayerID`: Unique identifier for each player.
    - `UserID`: Foreign key linking to the **User** entity.
    - `TournamentIDs`: List of tournaments the player is involved in.
    - `Gender`: Player’s gender (Female, Male).
    - `Handicap`: Player's handicap.
- **Relationships:**
    - Players can participate in multiple **Tournaments**.
    - Each Player has one **Scorecard** per **Tournament**.

### Tournament
- **Attributes:**
    - `TournamentID`: Unique identifier for each tournament.
    - `Name`: Name of the tournament.
    - `StartDate`: Start date of the tournament.
    - `FinishDate`: Finish date of the tournament.
    - `Players`: List of **PlayerIDs** participating.
    - `Format`: Format of the tournament (e.g., Individual, Team).
    - `Group`: Player group categories (e.g., Men HCP0-12, Men HCP 12.1-24, Men HCP 24.1-36, Women HCP 0-24, Women HCP 24.1-36).
    - `ScoringType`: Scoring type used for calculating results (e.g., Stableford, Stroke Net).
- **Relationships:**
    - A Tournament can include numerous **Players**.
    - Each Tournament is represented on one **Leaderboard**.

### Leaderboard
- **Attributes:**
    - `LeaderboardID`: Unique identifier for each leaderboard.
    - `TournamentID`: Foreign key linking to the **Tournament** entity.
- **Relationships:**
    - Each Leaderboard belongs to a specific **Tournament**.

### Scorecard
- **Attributes:**
    - `ScorecardID`: Unique identifier for each scorecard.
    - `PlayerIDs`: List of foreign keys linking to a **Player**.
    - `TournamentID`: Foreign key linking to a **Tournament**.
    - `Scores`: List of scores per hole.
    - `TotalScore`: Total score for the player.
- **Relationships:**
    - Each Scorecard is associated with one **Player** or one **Team**.
    - Each Scorecard is linked to a specific **Tournament**.
