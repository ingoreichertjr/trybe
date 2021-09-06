import React from 'react';
import { useSelector } from 'react-redux';

function TriviaHeader() {
  const name = useSelector((state) => state.user.name);
  const picture = useSelector((state) => state.user.gravatar);
  const score = useSelector((state) => state.game.score);

  return (
    <header className="game-header">
      <div className="game-header-player-info">
        <img data-testid="header-profile-picture" src={ picture } alt="Gravatar Pic" />
        <span data-testid="header-player-name">{`Player: ${name}`}</span>
      </div>
      <span>
        Score:&nbsp;
        <span data-testid="header-score">{ score }</span>
      </span>
    </header>
  );
}

export default TriviaHeader;
