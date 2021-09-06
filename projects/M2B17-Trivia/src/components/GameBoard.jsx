import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

// decodifica html entities
const decode = (str) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
};

function GameBoard(props) {
  const { questions, qIndex, time, options, dispatch, handleSelect, handleNext,
    setQIndex } = props;
  const question = questions[qIndex];
  const history = useHistory();

  const { category, question: query, correct_answer: correct,
    incorrect_answers: wrongs } = question;

  return (
    <div className="game-container">
      <main className="game-main">
        <div className="game-question-container">
          <p className="game-question-cat" data-testid="question-category">{category}</p>
          <p data-testid="question-text">{decode(query)}</p>
          <p>{`Time remaining: ${time}`}</p>
        </div>
        <div className="game-options-container">
          {options.map((option) => (
            <button
              key={ option }
              type="button"
              data-testid={ option === correct ? 'correct-answer'
                : `wrong-answer-${wrongs.indexOf(option)}` }
              name="options"
              value={ option }
              onClick={ ({ target }) => handleSelect(target, question, time, dispatch) }
            >
              {decode(option)}
            </button>))}
          <button
            type="button"
            data-testid="btn-next"
            className="game-next-btn invisible"
            onClick={ () => handleNext(questions, qIndex, setQIndex, history) }
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default GameBoard;

GameBoard.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  qIndex: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleNext: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  setQIndex: PropTypes.func.isRequired,
};
