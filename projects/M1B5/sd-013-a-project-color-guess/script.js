const optionsContainer = document.getElementById('options-container');
const color = document.getElementById('rgb-color');
const feedback = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.querySelector('span');

function generateColor() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

function generateAnswer(param) {
  const options = param;
  const rightAnswer = generateColor();
  color.innerHTML = rightAnswer;
  const index = Math.floor(Math.random() * 6);
  options[index].style.backgroundColor = `rgb${rightAnswer}`;
  options[index].addEventListener('click', () => {
    feedback.innerHTML = 'Acertou!';
    const currentScore = parseInt(score.innerHTML, 10);
    score.innerHTML = currentScore + 3;
  });
}

function generateOptions() {
  const options = document.getElementsByClassName('ball');
  for (let i = 0; i < options.length; i += 1) {
    options[i].style.backgroundColor = `rgb${generateColor()}`;
  }
  generateAnswer(options);
}

function generateBalls() {
  feedback.innerHTML = 'Escolha uma cor';
  for (let i = 1; i <= 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.addEventListener('click', () => {
      feedback.innerHTML = 'Errou! Tente novamente!';
    });
    optionsContainer.appendChild(ball);
  }
  generateOptions();
}

generateBalls();

resetButton.addEventListener('click', () => {
  optionsContainer.innerHTML = null;
  generateBalls();
});
