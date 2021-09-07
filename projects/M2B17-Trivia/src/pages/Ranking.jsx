import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Ranking.css';

const renderRankingList = (ranking) => (
  ranking.map((entry, index) => (
    <li key={ index } className="ranking-entry">
      <img src={ entry.picture } alt="player-gravatar" />
      <span>
        <span>{entry.name}</span>
        &nbsp;-&nbsp;
        <span>{entry.score}</span>
        <span>&nbsp;pontos</span>
      </span>

    </li>
  ))
);

function Ranking() {
  const ranking = useSelector((state) => state.game.ranking);

  return (
    <main className="ranking-container">
      <Link to="/" className="ranking-home-btn">
        <button type="button">Home</button>
      </Link>
      <h2 className="ranking-heading">Leaderboard</h2>
      <ol className="ranking-list">
        {renderRankingList(ranking)}
      </ol>
    </main>
  );
}

export default Ranking;
