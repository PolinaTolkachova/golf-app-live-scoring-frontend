// src/components/Tournaments.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/tournament')
            .then(response => {
                setTournaments(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tournaments!', error);
            });
    }, []);

    return (
        <div>
            <h1>All Tournaments</h1>
            <ul>
                {tournaments.map(tournament => (
                    <li key={tournament.tournamentID}>
                        {tournament.name} - {tournament.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tournaments;