import React, { useEffect, useState } from 'react'; // Import React library along with useEffect and useState hooks
import axios from 'axios'; // Import Axios for making HTTP requests

// Functional component for displaying a list of players in a table format
const Players = () => {
    // State to hold player data, initialized as an empty array
    const [players, setPlayers] = useState([]);

    // useEffect hook to perform side-effects (fetching data from API) when the component mounts
    useEffect(() => {
        // Axios GET request to fetch player data from the API
        axios.get('http://localhost:8082/player')
            .then(response => {
                // On successful data retrieval, update the players state
                setPlayers(response.data);
            })
            .catch(error => {
                // Log an error message if the request fails
                console.error('There was an error fetching the players!', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // JSX to render the component UI in a table format
    return (
        <div>
            <h1>Players</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Gender</th>
                        <th>Handicap</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        // Render a table row for each player, using player ID as a unique key
                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <td>{player.user.username}</td> {/* Assumes player has a nested user object with a username */}
                            <td>{player.gender}</td>
                            <td>{player.handicap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Players; // Export the Players component as default