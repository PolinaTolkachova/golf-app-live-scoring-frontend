import React from 'react';

const TournamentRow = ({ tournament, onClick }) => (
  <tr onClick={onClick} style={{ cursor: 'pointer' }}>
    <td>{tournament.name}</td>
    <td>{tournament.location}</td>
    <td>{tournament.startDate}</td>
    <td>{tournament.finishDate}</td>
    <td>{tournament.scoringType}</td>
    <td>{tournament.format}</td>
  </tr>
);

export default TournamentRow;