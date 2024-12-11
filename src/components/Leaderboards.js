import React, { useEffect, useState } from 'react'; // Import React library along with useEffect and useState hooks
import axios from 'axios'; // Import Axios for making HTTP requests

// Functional component for displaying a list of leaderboards in a table format
const Leaderboards = () => {
    // State to hold tournament data, initialized as an empty array
    const [leaderboards, setLeaderboards] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false); // State to toggle form visibility

    // useEffect hook to perform side-effects (fetching data from API) when the component mounts
    useEffect(() => {
        // Axios GET request to fetch tournaments data from the API
        axios.get('http://localhost:8082/leaderboard')
            .then(response => {
                // On successful data retrieval, update the tournaments state
                setLeaderboards(response.data);
            })
            .catch(error => {
                // Log an error message if the request fails
                console.error('There was an error fetching the leaderboards!', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // JSX to render the component UI in a table format
    return (
        <div>
            <h1>Leaderboards Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>LeaderboardID</th>
                        <th>TournamentID</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboards.map(leaderboard => (
                        // Render a table row for each tournament, using leaderboardID as a unique key
                        <tr key={leaderboard.id}>
                            <td>{leaderboard.id}</td>
                            <td>{leaderboard.tournament_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboards; // Export the Leaderboards component as default