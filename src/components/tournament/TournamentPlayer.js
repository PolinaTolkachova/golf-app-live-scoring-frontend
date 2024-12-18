import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScoreCard from './../scoreCard/ScoreCard';

const TournamentPlayer = () => {
  const { t } = useTranslation();
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

  if (!player) return <div className="text-center">{t('loading')}</div>;

  return (
    <div className="container mt-4">
      <h2>{t('playerDetails')} - {player.user.name} {player.user.surname}</h2>
      <table className="table table-striped mb-4">
        <tbody>
          <tr>
            <th>{t('playerName')}</th>
            <td>{player.user.name}</td>
          </tr>
          <tr>
            <th>{t('playerSurname')}</th>
            <td>{player.user.surname}</td>
          </tr>
          <tr>
            <th>{t('playerGender')}</th>
            <td>{player.gender}</td>
          </tr>
          <tr>
            <th>{t('playerHandicap')}</th>
            <td>{player.handicap}</td>
          </tr>
        </tbody>
      </table>

      <ScoreCard />

    </div>
  );
};

export default TournamentPlayer;