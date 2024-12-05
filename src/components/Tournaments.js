import React, { useEffect, useState } from 'react'; // Import React library along with useEffect and useState hooks
import axios from 'axios'; // Import Axios for making HTTP requests

// Functional component for displaying a list of tournaments in a table format
const Tournaments = () => {
    // State to hold tournament data, initialized as an empty array
    const [tournaments, setTournaments] = useState([]);

    // useEffect hook to perform side-effects (fetching data from API) when the component mounts
    useEffect(() => {
        // Axios GET request to fetch tournaments data from the API
        axios.get('http://localhost:8082/tournament')
            .then(response => {
                // On successful data retrieval, update the tournaments state
                setTournaments(response.data);
            })
            .catch(error => {
                // Log an error message if the request fails
                console.error('There was an error fetching the tournaments!', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // JSX to render the component UI in a table format
    return (
        <div>
            <h1>Tournaments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Start Date</th>
                        <th>Finish Date</th>
                        <th>Scoring Type</th>
                        <th>Format</th>
                    </tr>
                </thead>
                <tbody>
                    {tournaments.map(tournament => (
                        // Render a table row for each tournament, using tournamentID as a unique key
                        <tr key={tournament.tournamentID}>
                            <td>{tournament.name}</td>
                            <td>{tournament.location}</td>
                            <td>{tournament.startDate}</td>
                            <td>{tournament.finishDate}</td>
                            <td>{tournament.scoringType}</td>
                            <td>{tournament.format}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tournaments; // Export the Tournaments component as default