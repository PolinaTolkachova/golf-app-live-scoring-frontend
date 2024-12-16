import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [scorecards, setScorecards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8082/player/${id}`)
      .then(response => {
        setPlayer(response.data);
      })
      .catch(error => {
        console.error('Error fetching player:', error);
      });

    axios.get(`http://localhost:8082/player/${id}/scorecards`)
      .then(response => {
        setScorecards(response.data);
      })
      .catch(error => {
        console.error('Error fetching scorecards:', error);
      });
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Player Details - {player.user.name} {player.user.surname}</h2>
      <table className="table table-striped mb-4">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{player.user.name}</td>
          </tr>
          <tr>
            <th>Surname</th>
            <td>{player.user.surname}</td>
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

      <h3>Scorecards</h3>
      {scorecards.length > 0 ? (
        scorecards.map(scorecard => (
          <div key={scorecard.id} className="mb-3">
            <h5>{scorecard.tournament.name}</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Hole</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(scorecard.holeScores).map(([hole, score]) => (
                  <tr key={hole}>
                    <td>{hole}</td>
                    <td>{score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No scorecards available.</p>
      )}
    </div>
  );
};

export default Player;