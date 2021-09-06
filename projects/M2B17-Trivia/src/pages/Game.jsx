import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TriviaHeader, GameBoard } from '../components';
import { getQuestions, updateScore } from '../redux/actions';
import './Game.css';

const maxTime = 30;
const aSecond = 1000;
const basePoints = 10;
let intervalID;

// Função que embaralha as respostas;
const fisherYatesShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Função que reseta as proprieades das respostas;
const optionsCleanup = (setTime) => {
  const options = document.getElementsByName('options');
  options.forEach((opt) => {
    opt.disabled = false;
    opt.className = '';
  });
  document.querySelector('.game-next-btn').classList.add('invisible');
  setTime(maxTime);
};

// Função que diminui o tempo restante em 1s;
const tick = (setTime) => {
  setTime((state) => state - 1);
};

// Função que passa pra próxima pergunta ou pra tela de feedback;
const handleNext = (questions, qIndex, setQIndex, history) => {
  if (qIndex < questions.length - 1) {
    setQIndex((state) => state + 1);
  } else {
    history.push('/feedback');
  }
};

// Função que desabilita as opções, mostra a resposta certa e habilita o botão "Next";
const disableAndPaint = (correct) => {
  const options = document.getElementsByName('options');
  options.forEach((opt) => {
    opt.disabled = true;
    opt.className = opt.value === correct ? 'correct-answer'
      : 'wrong-answer';
  });
  document.querySelector('.game-next-btn').classList.remove('invisible');
};

// Função que para o timer, chama a de cima, calcula e atualiza o score;
const handleSelect = ({ value }, question, time, dispatch) => {
  const { correct_answer: correct, difficulty } = question;
  disableAndPaint(correct);
  clearInterval(intervalID);

  if (value === correct) {
    const diffArray = ['easy', 'medium', 'hard'];
    const multiplier = diffArray.indexOf(difficulty) + 1;
    const lsData = JSON.parse(localStorage.state);
    lsData.player.assertions += 1;
    lsData.player.score += basePoints + (time * multiplier);
    localStorage.state = JSON.stringify(lsData);
    const payload = { score: lsData.player.score, assertions: lsData.player.assertions };
    dispatch(updateScore(payload));
  }
};

function Game() {
  const dispatch = useDispatch();
  const tokenExpired = useSelector((state) => state.game.tokenExpired);
  const token = useSelector((state) => state.user.token);
  const questions = useSelector((state) => state.game.questions);
  const [qIndex, setQIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [time, setTime] = useState(maxTime);

  // Effect que faz o fetch das perguntas na API;
  useEffect(() => { dispatch(getQuestions(token)); }, [token, dispatch]);
  // Effect que manda embaralhar as respostas caso seja do tipo "multiple", esconde o botão "Next" e liga o timer;
  useEffect(() => {
    if (questions.length > 1 && qIndex < questions.length) {
      const { correct_answer: correct, incorrect_answers: wrongs } = questions[qIndex];
      setOptions(['True', 'False']);
      if (questions[qIndex].type === 'multiple') {
        setOptions(fisherYatesShuffle([...wrongs, correct]));
      }
      intervalID = setInterval(() => tick(setTime), aSecond);
      return optionsCleanup(setTime); // cleanup options pra impedir bug em caso de duas boolean seguidas.
    }
  }, [qIndex, questions]);
  // Effect que desliga o timer e chama a disableAndPaint caso o tempo se esgote;
  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalID);
      disableAndPaint(questions[qIndex].correct_answer);
    }
  }, [time, qIndex, questions]);
  // Effect pra parar o timer caso o component seja desmontado;
  useEffect(() => () => clearInterval(intervalID), []);

  if (tokenExpired || !token) return <Redirect to="/" />;
  if (questions.length < 1) return <h3 className="game-loading">Loading questions...</h3>;
  return (
    <>
      <TriviaHeader />
      <GameBoard
        qIndex={ qIndex }
        time={ time }
        options={ options }
        handleSelect={ handleSelect }
        handleNext={ handleNext }
        setQIndex={ setQIndex }
      />
    </>
  );
}

export default Game;
