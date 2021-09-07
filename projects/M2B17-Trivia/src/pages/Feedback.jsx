import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TriviaHeader } from '../components';
import './Feedback.css';
import { updateRanking } from '../redux/actions';

const assertionsThreshold = 3;

const updateLeaderboard = (name, picture, score, dispatch) => {
  const newEntry = { name, score, picture };
  if (localStorage.ranking) {
    const ranking = JSON.parse(localStorage.ranking);
    const updatedRanking = [...ranking, newEntry].sort((a, b) => b.score - a.score);
    localStorage.ranking = JSON.stringify(updatedRanking);
  } else {
    localStorage.ranking = JSON.stringify([newEntry]);
  }
  dispatch(updateRanking(JSON.parse(localStorage.ranking)));
};

function Feedback() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const picture = useSelector((state) => state.user.gravatar);
  const score = useSelector((state) => state.game.score);
  const assertions = useSelector((state) => state.game.assertions);

  const msg = assertions < assertionsThreshold ? 'Podia ser melhor...' : 'Mandou bem!';

  useEffect(() => {
    updateLeaderboard(name, picture, score, dispatch);
  }, [name, picture, score, dispatch]);

  return (
    <>
      <TriviaHeader />
      <main className="feedback-container">
        <div className="feedback-text-container">
          <h3>{msg}</h3>
          <p>
            Você acertou&nbsp;
            <span>{assertions}</span>
            &nbsp;questões!
          </p>
          <p>
            Um total de&nbsp;
            <span>{score}</span>
            &nbsp;pontos!
          </p>
        </div>
        <div className="feedback-btns-container">
          <Link to="/">
            <button type="button">Play again!</button>
          </Link>
          <Link to="/ranking">
            <button type="button">Leaderboard</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Feedback;
