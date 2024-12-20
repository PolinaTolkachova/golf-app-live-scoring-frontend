import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leaderboards = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const history = useHistory();

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
            <th>Location</th>
            <th>Start Date</th>
            <th>Finish Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.map(leaderboard => (
            <tr key={leaderboard.id} onClick={() => history.push(`/leaderboard/${leaderboard.id}`)} style={{ cursor: 'pointer' }}>
              <td>{leaderboard.tournament.name}</td>
              <td>{leaderboard.tournament.location}</td>
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