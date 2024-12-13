import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <form onSubmit={handleSubmit} className="border rounded p-3 bg-light">
        <div className="form-group">
            <label htmlFor="user">User:</label>
                <input 
                type="text" 
                name="user" 
                className="form-control mb-2"
                placeholder="User" 
                value={formData.user} 
                onChange={handleChange} 
                required />
        </div>
        <div className="form-group">
            <label htmlFor="user">Gender:</label>
                <input 
                    type="text" 
                    name="gender" 
                    className="form-control mb-2"
                    placeholder="Gender" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                />
        </div>
        <div className="form-group">
            <label htmlFor="handicap">Handicap:</label>
            <input 
                type="text" 
                name="handicap" 
                className="form-control mb-2"
                placeholder="Handicap" 
                value={formData.format} 
                onChange={handleChange} 
                required 
            />
        </div>
            <button type="submit" className="btn btn-primary mt-3">Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;