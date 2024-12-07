import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTournament from './AddTournament';  // Import the AddTournament component

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle form visibility

  useEffect(() => {
    axios.get('http://localhost:8082/tournament')
      .then(response => {
        setTournaments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tournaments!', error);
      });
  }, []);

  const handleAddTournament = (newTournament) => {
    setTournaments([...tournaments, newTournament]);
    setShowAddForm(false); // Hide the form after adding a tournament
  };

  return (
    <div>
      <h1>Tournaments</h1>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Cancel' : 'Add Tournament'}
      </button>
      {showAddForm && <AddTournament onTournamentAdded={handleAddTournament} />}
      <table>
        <thead>
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
            <tr key={tournament.id}>
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