import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const history = useHistory();

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
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Tournaments</h1>
        <button className="btn btn-primary" onClick={() => history.push('/add-tournament')}>
          Add Tournament
        </button>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Finish Date</th>
            <th>Scoring Type</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map(tournament => (
            <tr key={tournament.id} onClick={() => history.push(`/tournament/${tournament.id}`)} style={{ cursor: 'pointer' }}>
              <td>{tournament.name}</td>
              <td>{tournament.location}</td>
              <td>{tournament.startDate}</td>
              <td>{tournament.finishDate}</td>
              <td>{tournament.scoringType}</td>
              <td>{tournament.format}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tournaments;