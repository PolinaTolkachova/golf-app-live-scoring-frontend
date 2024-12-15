import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const TournamentDetail = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8082/tournament/${id}`)
      .then(response => {
        setTournament(response.data);
      })
      .catch(error => {
        console.error('Error fetching tournament details:', error);
      });
  }, [id]);

  if (!tournament) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Tournament Details - {tournament.name}</h2>
      <button className="btn btn-secondary mb-4" onClick={() => history.push('/')}>Back to Tournaments</button>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{tournament.name}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{tournament.location}</td>
          </tr>
          <tr>
            <th>Start Date</th>
            <td>{tournament.startDate}</td>
          </tr>
          <tr>
            <th>Finish Date</th>
            <td>{tournament.finishDate}</td>
          </tr>
          <tr>
            <th>Scoring Type</th>
            <td>{tournament.scoringType}</td>
          </tr>
          <tr>
            <th>Format</th>
            <td>{tournament.format}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TournamentDetail;