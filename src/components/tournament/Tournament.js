import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Tournament = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState(null);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState(new Set());
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8082/tournament/${id}`)
      .then(response => {
        setTournament(response.data);
      })
      .catch(error => {
        console.error('Error fetching tournament details:', error);
      });

    axios.get('http://localhost:8082/player')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching players:', error);
      });
  }, [id]);

  const handlePlayerSelection = (playerId) => {
    setSelectedPlayers(prev => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(playerId)) {
        updatedSet.delete(playerId);
      } else {
        updatedSet.add(playerId);
      }
      return updatedSet;
    });
  };

  const handleAddPlayers = () => {
    const playerObjects = Array.from(selectedPlayers).map(playerId => {
      return players.find(player => player.id === playerId);
    });

    const updatedTournament = {
      ...tournament,
      players: playerObjects,
    };

    axios.post('http://localhost:8082/tournament', updatedTournament)
      .then(() => {
        alert('Tournament updated with players successfully!');
        history.push(`/tournament/${id}`);
      })
      .catch(error => {
        console.error('Error updating tournament:', error);
      });
  };

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

      <h3 className="mt-4">Players in this Tournament</h3>
      <ul className="list-group mb-3">
        {tournament.players && tournament.players.length > 0 ? (
          tournament.players.map(player => (
            <li key={player.id} className="list-group-item">
              {player.user.username} - Handicap: {player.handicap}
            </li>
          ))
        ) : (
          <li className="list-group-item">No players added to this tournament yet.</li>
        )}
      </ul>

      <h3 className="mt-4">Add Players</h3>
      <div className="list-group mb-3">
        {players.map(player => (
          <div key={player.id} className="list-group-item">
            <input
              type="checkbox"
              checked={selectedPlayers.has(player.id)}
              onChange={() => handlePlayerSelection(player.id)}
            />
            <span className="ms-2">{player.user.username} - Handicap: {player.handicap}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-primary" onClick={handleAddPlayers}>Add Selected Players</button>
    </div>
  );
};

export default Tournament;