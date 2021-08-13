import React from 'react';
import GameBoard from './GameBoard';
import xImage from './x.png';
import oImage from './o.svg';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: false,
    };
  }

  handleWinOnDiagonal = (board) => {
    if (board[0] !== 0 && board[0] === board[4] && board[0] === board[8]) {
      this.setState({ winner: true})
      return
    }
    if (board[2] !== 0 && board[2] === board[4] && board[2] === board[6]) {
      this.setState({ winner: true})
      return
    }
  }

  handleWinOnColumn = (board) => {
    for (let i = 0; i <= 2; i += 1) {
      if (board[i] !== 0 && board[i] === board[i+3] && board[i] === board[i+6]) {
        this.setState({ winner: true})
        return
      }
    }
    this.handleWinOnDiagonal(board)
  }

  handleWinOnLine = (board) => {
    for (let i = 0; i <= 6; i += 3) {
      if (board[i] !== 0 && board[i] === board[i+1] && board[i] === board[i+2]) {
        this.setState({ winner: true})
        return
      }
    }
    this.handleWinOnColumn(board)
  }

  handleClick = ({target}) => {
    const { activePlayer, gameBoard } = this.state;
    const casa = [...document.querySelectorAll('.game-cell')].indexOf(target);

    if (gameBoard[casa] !== 0) return;

    const updatedBoard = [...gameBoard];
    updatedBoard[casa] = activePlayer;
    const nextPlayer = activePlayer === 1 ? 2 : 1;

    target.innerHTML= activePlayer === 1 ? `<img src=${xImage} alt="X" />`
      : `<img src=${oImage} alt="O" />`

      this.handleWinOnLine(updatedBoard)

    this.setState({ activePlayer: nextPlayer, gameBoard: updatedBoard })

  }

  render() {
    const { activePlayer, gameBoard, winner } = this.state
    return (
         winner ? <p>Fim de Jogo</p> : (
          <>
            <GameBoard onClick={ this.handleClick } gameState={this.state.gameBoard} />
            <p>{activePlayer}</p>
            <p>{gameBoard}</p>
          </>
        )
    )
  }
}

export default TicTacToe;
