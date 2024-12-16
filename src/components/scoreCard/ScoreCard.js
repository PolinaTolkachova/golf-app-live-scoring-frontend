import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ScoreCard = () => {
  const { id } = useParams();
  const [scorecard, setScorecard] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8082/scorecard/${id}`)
      .then(response => {
        setScorecard(response.data);
      })
      .catch(error => {
        console.error('Error fetching scorecard:', error);
      });
  }, [id]);

  if (!scorecard) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>ScoreCard for Tournament: {scorecard.tournament.name}</h2>
      <h4>Players:</h4>
      <ul>
        {scorecard.players.map(player => (
          <li key={player.id}>{player.user.name} {player.user.surname}</li>
        ))}
      </ul>
      <h4>Scores:</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Hole Number</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(scorecard.holeScores).map(([holeNumber, score]) => (
            <tr key={holeNumber}>
              <td>{holeNumber}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreCard;