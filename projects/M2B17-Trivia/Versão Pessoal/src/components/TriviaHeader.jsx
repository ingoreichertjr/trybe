import React from 'react';
import { useSelector } from 'react-redux';
import trivia from '../trivia.png';
import './TriviaHeader.css';

function TriviaHeader() {
  const name = useSelector((state) => state.user.name);
  const picture = useSelector((state) => state.user.gravatar);
  const score = useSelector((state) => state.game.score);

  return (
    <header className="game-header">
      <div className="game-header-player-info">
        <img src={ picture } alt="Gravatar Pic" />
        <span>{`Player: ${name}`}</span>
      </div>
      <img className="trivia-logo" src={ trivia } alt="Trivia-Logo" />
      <span>
        Score:&nbsp;
        <span>{ score }</span>
      </span>
    </header>
  );
}

export default TriviaHeader;
