import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Leaderboard = () => {
  const { id } = useParams();
  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8082/leaderboard/${id}`)
      .then(response => {
        setLeaderboard(response.data);
      })
      .catch(error => {
        console.error('Error fetching leaderboard:', error);
      });
  }, [id]);

  if (!leaderboard) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Leaderboard Details - {leaderboard.tournament.name}</h2>
      <table className="table table-striped mb-4">
        <tbody>
          <tr>
            <th>Tournament Name</th>
            <td>{leaderboard.tournament.name}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{leaderboard.tournament.location}</td>
          </tr>
          <tr>
            <th>Start Date</th>
            <td>{leaderboard.tournament.startDate}</td>
          </tr>
          <tr>
            <th>Finish Date</th>
            <td>{leaderboard.tournament.finishDate}</td>
          </tr>
        </tbody>
      </table>

      <h3>Players</h3>
      {leaderboard.tournament.players && leaderboard.tournament.players.length > 0 ? (
        <table className="table table-striped mb-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.tournament.players.map(player => (
              <tr key={player.id}>
                <td>{player.user.name}</td>
                <td>{player.user.surname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No players found for this tournament.</div>
      )}
    </div>
  );
};

export default Leaderboard;