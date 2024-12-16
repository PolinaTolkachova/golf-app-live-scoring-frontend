import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8082/player/${id}`)
      .then(response => {
        setPlayer(response.data);
      })
      .catch(error => {
        console.error('Error fetching player details:', error);
      });
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Player Details - {player.user.username}</h2>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Id</th>
            <td>{player.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{player.user.username}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{player.gender}</td>
          </tr>
          <tr>
            <th>Handicap</th>
            <td>{player.handicap}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayerDetail;