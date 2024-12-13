import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTournament = ({ onTournamentAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    startDate: '',
    finishDate: '',
    scoringType: '',
    format: '',
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
        onTournamentAdded(response.data);
        setFormData({ name: '', location: '', startDate: '', finishDate: '', scoringType: '', format: '' });
      })
      .catch(error => {
        console.error('There was an error creating the tournament!', error);
      });
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="w-50">
        <h2 className="text-center mb-4">Add Tournament</h2>
        <form onSubmit={handleSubmit} className="border rounded p-4 bg-light shadow-sm">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control mb-3"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-control mb-3"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group row">
            <div className="col">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="form-control mb-3"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="finishDate">Finish Date:</label>
              <input
                type="date"
                id="finishDate"
                name="finishDate"
                className="form-control mb-3"
                value={formData.finishDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="scoringType">Scoring Type:</label>
            <input
              type="text"
              id="scoringType"
              name="scoringType"
              className="form-control mb-3"
              placeholder="Scoring Type"
              value={formData.scoringType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="format">Format:</label>
            <input
              type="text"
              id="format"
              name="format"
              className="form-control mb-3"
              placeholder="Format"
              value={formData.format}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Add Tournament</button>
        </form>
      </div>
    </div>
  );
};

export default AddTournament;