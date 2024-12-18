import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component for displaying individual tournament rows
const TournamentRow = ({ tournament, onClick }) => (
  <tr onClick={onClick} style={{ cursor: 'pointer' }}>
    <td>{tournament.name}</td>
    <td>{tournament.location}</td>
    <td>{tournament.startDate}</td>
    <td>{tournament.finishDate}</td>
    <td>{tournament.scoringType}</td>
    <td>{tournament.format}</td>
  </tr>
);

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  const fetchTournaments = async () => {
    try {
      const response = await axios.get('http://localhost:8082/tournament');
      setTournaments(response.data);
    } catch (error) {
      console.error('There was an error fetching the tournaments!', error);
      setError('Could not fetch tournaments. Please try again later.');
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Tournaments</h1>
        <button className="btn btn-primary" onClick={() => history.push('/add-tournament')}>
          Add Tournament
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
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
            <TournamentRow
              key={tournament.id}
              tournament={tournament}
              onClick={() => history.push(`/tournament/${tournament.id}`)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tournaments;