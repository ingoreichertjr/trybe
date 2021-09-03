import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TriviaHeader({ gravatar, name, score }) {
  return (
    <header className="game-header">
      <div className="game-header-player-info">
        <img data-testid="header-profile-picture" src={ gravatar } alt="Gravatar Pic" />
        <span data-testid="header-player-name">{`Player: ${name}`}</span>
      </div>
      <span>
        Score:&nbsp;
        <span data-testid="header-score">{ score }</span>
      </span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  gravatar: state.user.gravatar,
  score: state.game.score,
});

export default connect(mapStateToProps, null)(TriviaHeader);

TriviaHeader.propTypes = {
  name: PropTypes.string,
  gravatar: PropTypes.string,
  score: PropTypes.number,
};

TriviaHeader.defaultProps = {
  gravatar: '',
  name: '',
  score: 0,
};
