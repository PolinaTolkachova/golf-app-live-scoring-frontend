import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leaderboards = () => {
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/leaderboard')
      .then(response => {
        setLeaderboards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the leaderboards!', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Leaderboards</h1>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Tournament Name</th>
            <th>Tournament Start Date</th>
            <th>Tournament Finish Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.map(leaderboard => (
            <tr key={leaderboard.id}>
              <td>{leaderboard.tournament.name}</td>
              <td>{leaderboard.tournament.startDate}</td>
              <td>{leaderboard.tournament.finishDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboards;