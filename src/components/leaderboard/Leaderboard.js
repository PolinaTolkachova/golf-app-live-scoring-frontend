import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Leaderboard = () => {
  const { id } = useParams();
  const [leaderboard, setLeaderboard] = useState(null);
//   const [scorecards, setScorecards] = useState([]);

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
      <h2>Leaderboard Details - {leaderboard.id} {leaderboard.tournament.name}</h2>
      <table className="table table-striped mb-4">
        <tbody>
          <tr>
            <th>Id</th>
            <td>{leaderboard.id}</td>
          </tr>
          <tr>
            <th>Tournament Name</th>
            <td>{leaderboard.tournament.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;