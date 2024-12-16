import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8082/player')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the players!', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Players</h1>
      </div>
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
            <tr key={player.id} onClick={() => history.push(`/player/${player.id}`)} style={{ cursor: 'pointer' }}>
              <td>{player.user.name}</td>
              <td>{player.user.surname}</td>
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