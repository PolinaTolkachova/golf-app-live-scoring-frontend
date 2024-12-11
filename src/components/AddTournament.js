import React, { useState } from 'react';
import axios from 'axios';

const AddTournament = ({ onTournamentAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    startDate: '',
    finishDate: '',
    scoringType: '',
    format: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/tournament', formData)
      .then(response => {
        onTournamentAdded(response.data); // Notify parent about the new tournament
        setFormData({
          name: '',
          location: '',
          startDate: '',
          finishDate: '',
          scoringType: '',
          format: ''
        });
      })
      .catch(error => {
        console.error('There was an error creating the tournament!', error);
      });
  };

  return (
    <div>
      <h2>Add New Tournament</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        <input type="date" name="finishDate" value={formData.finishDate} onChange={handleChange} required />
        <input type="text" name="scoringType" placeholder="Scoring Type" value={formData.scoringType} onChange={handleChange} required />
        <input type="text" name="format" placeholder="Format" value={formData.format} onChange={handleChange} required />
        <button type="submit">Add Tournament</button>
      </form>
    </div>
  );
};

export default AddTournament;