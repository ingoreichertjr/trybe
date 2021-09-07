import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// decodifica html entities
const decode = (str) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
};

function GameBoard({ qIndex, time, options, handleSelect, handleNext, setQIndex }) {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.game.questions);
  const question = questions[qIndex];
  const history = useHistory();

  const { category, question: query } = question;

  return (
    <div className="game-container">
      <main className="game-main">
        <div className="questions-and-options-container">
          <div className="game-question-container">
            <p className="game-question-cat">{category}</p>
            <p>{decode(query)}</p>
            <p>{`Time remaining: ${time}`}</p>
          </div>
          <div className="game-options-container">
            {options.map((option) => (
              <button
                key={ option }
                type="button"
                name="options"
                value={ option }
                onClick={ ({ target }) => handleSelect(target, question, time, dispatch) }
              >
                {decode(option)}
              </button>))}
          </div>
        </div>
        <button
          type="button"
          className="game-next-btn invisible"
          onClick={ () => handleNext(questions, qIndex, setQIndex, history) }
        >
          Next
        </button>
      </main>
    </div>
  );
}

export default GameBoard;

GameBoard.propTypes = {
  qIndex: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleNext: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  setQIndex: PropTypes.func.isRequired,
};
