import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPlayer from './AddPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8082/player')
            .then(response => {
                setPlayers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the players!', error);
            });
    }, []);

    const handleAddPlayer = (newPlayer) => {
        setPlayers([...players, newPlayer]);
        setShowAddForm(false);
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Players</h1>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  {showAddForm ? 'Cancel' : 'Add Player'}
                </button>
            </div>
            {showAddForm && <AddPlayer onPlayerAdded={handleAddPlayer} />}
            <table className="table table-striped table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Gender</th>
                    <th>Handicap</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
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

export default Players;