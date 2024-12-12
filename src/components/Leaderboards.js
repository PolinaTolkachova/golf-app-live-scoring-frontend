import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboards = () => {
    const [leaderboards, setLeaderboards] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    // useEffect hook to perform side-effects (fetching data from API) when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8082/leaderboard')
            .then(response => {
                // On successful data retrieval, update the leaderboards state
                setLeaderboards(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the leaderboards!', error);
            });
    }, []);

    return (
        <div>
            <h1>Leaderboards</h1>
            <table>
                <thead>
                    <tr>
                        <th>LeaderboardID</th>
                        <th>TournamentID</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboards.map(leaderboard => (
                        <tr key={leaderboard.id}>
                            <td>{leaderboard.id}</td>
                            <td>{leaderboard.tournament.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboards;