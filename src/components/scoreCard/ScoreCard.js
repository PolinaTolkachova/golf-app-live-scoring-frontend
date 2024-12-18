import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ScoreCard = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const [scores, setScores] = useState(Array(18).fill(null));
    const [successMessage, setSuccessMessage] = useState('');

    const handleScoreChange = (index, value) => {
        const newScores = [...scores];
        newScores[index] = value === '' ? null : value;
        setScores(newScores);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const scoreData = scores.reduce((acc, score, index) => {
            if (score !== null) {
                acc[index + 1] = score;
            }
            return acc;
        }, {});

        if (Object.keys(scoreData).length === 0) {
            console.error('No scores entered for submission.');
            return;
        }

        axios.post(`http://localhost:8082/player/${id}/scorecards`, { holeScores: scoreData })
            .then(response => {
                setSuccessMessage(t('scorecardSaved'));
                setScores(Array(18).fill(null));
            })
            .catch(error => {
                console.error('Error saving scorecard:', error);
            });
    };

    return (
        <div className="scorecard-container mt-4">
            <h3>{t('Score card')}</h3>
            <form onSubmit={handleSubmit}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>{t('Hole')}</th>
                            <th>{t('Score')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((score, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={score === null ? '' : score}
                                        min="0"
                                        onChange={(e) => handleScoreChange(index, e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">{t('Submit scores')}</button>
            </form>
            {successMessage && <div className="alert alert-success mt-2">{successMessage}</div>}
        </div>
    );
};

export default ScoreCard;