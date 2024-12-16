import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  if (!tournament) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="mb-0">{tournament.name}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5>Tournament Details</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Location:</strong> {tournament.location}</li>
                <li className="list-group-item"><strong>Start Date:</strong> {tournament.startDate}</li>
                <li className="list-group-item"><strong>Finish Date:</strong> {tournament.finishDate}</li>
                <li className="list-group-item"><strong>Scoring Type:</strong> {tournament.scoringType}</li>
                <li className="list-group-item"><strong>Format:</strong> {tournament.format}</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Players in this Tournament</h5>
              <ul className="list-group list-group-flush">
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
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5>Add Players</h5>
        </div>
        <div className="card-body">
          <div className="list-group">
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
          <button className="btn btn-primary mt-3" onClick={handleAddPlayers}>Add Selected Players</button>
        </div>
      </div>
    </div>
  );
};

export default Tournament;