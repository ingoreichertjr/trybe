import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TriviaHeader } from '../components';
import './Feedback.css';
import { updateRanking } from '../redux/actions';

const assertionsThreshold = 3;

const updateLeaderboard = (name, picture, score, updtRanking) => {
  const newEntry = { name, score, picture };
  if (localStorage.ranking) {
    const ranking = JSON.parse(localStorage.ranking);
    const updatedRanking = [...ranking, newEntry].sort((a, b) => b.score - a.score);
    localStorage.ranking = JSON.stringify(updatedRanking);
  } else {
    localStorage.ranking = JSON.stringify([newEntry]);
  }
  updtRanking(JSON.parse(localStorage.ranking));
};

function Feedback({ name, picture, score, assertions, updtRanking }) {
  const msg = assertions < assertionsThreshold ? 'Podia ser melhor...' : 'Mandou bem!';

  useEffect(() => {
    updateLeaderboard(name, picture, score, updtRanking);
  }, [name, picture, score, updtRanking]);

  return (
    <>
      <TriviaHeader />
      <main className="feedback-container">
        <div className="feedback-text-container">
          <h3 data-testid="feedback-text">{msg}</h3>
          <p>
            Você acertou&nbsp;
            <span data-testid="feedback-total-question">{assertions}</span>
            &nbsp;questões!
          </p>
          <p>
            Um total de&nbsp;
            <span data-testid="feedback-total-score">{score}</span>
            &nbsp;pontos!
          </p>
        </div>
        <div className="feedback-btns-container">
          <Link to="/">
            <button data-testid="btn-play-again" type="button">Play again!</button>
          </Link>
          <Link to="/ranking">
            <button data-testid="btn-ranking" type="button">Leaderboard</button>
          </Link>
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  picture: state.user.gravatar,
  score: state.game.score,
  assertions: state.game.assertions,
});

const mapDispatchToProps = (dispatch) => ({
  updtRanking: (payload) => dispatch(updateRanking(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  updtRanking: PropTypes.func.isRequired,
};
