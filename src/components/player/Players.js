import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerRow = ({ player, onClick }) => (
  <tr onClick={onClick} style={{ cursor: 'pointer' }}>
    <td>{player.user.name}</td>
    <td>{player.user.surname}</td>
    <td>{player.gender}</td>
    <td>{player.handicap}</td>
  </tr>
);

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:8082/player');
      setPlayers(response.data);
    } catch (error) {
      console.error('There was an error fetching the players!', error);
      setError('Could not fetch players. Please try again later.');
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Players</h1>
      </div>
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>Handicap</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <PlayerRow
                key={player.id}
                player={player}
                onClick={() => history.push(`/player/${player.id}`)}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Players;