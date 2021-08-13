import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    return (
      <div className="game-board" onClick={ this.props.onClick }>
        {this.props.gameState.map((playerId, i) => (
          <GameCell key={`cell_${i}`} id={i} />
        ))}
      </div>
    );
  }
}

export default GameBoard;
