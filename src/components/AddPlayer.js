import React, { useState } from 'react';
import axios from 'axios';

const AddPlayer = ({ onAddPlayerAdded }) => {
  const [formData, setFormData] = useState({
    user: '',
    gender: '',
    handicap: '',
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
    axios.post('http://localhost:8082/player', formData)
      .then(response => {
        onAddPlayerAdded(response.data); // Notify parent about the new tournament
        setFormData({
            user: '',
            gender: '',
            handicap: '',                });
      })
      .catch(error => {
        console.error('There was an error creating the player!', error);
      });
  };

  return (
    <div>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" placeholder="User" value={formData.user} onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" value={formData.location} onChange={handleChange} required />
        <input type="text" name="handicap" placeholder="Handicap" value={formData.format} onChange={handleChange} required />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;