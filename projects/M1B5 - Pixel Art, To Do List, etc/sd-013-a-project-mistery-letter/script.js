const input = document.getElementById('carta-texto');
const addButton = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const roll = ['rotateleft', 'rotateright'];
const pitch = ['skewleft', 'skewright'];

// Random classes (req 16)

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Req 17

function changeClasses(event) {
  const evento = event;
  evento.target.className = '';
  evento.target.classList.add(style[randomNumber(2)], size[randomNumber(2)]);
  evento.target.classList.add(roll[randomNumber(1)], pitch[randomNumber(1)]);
}

// Reqs 4 e 5

function createLetter() {
  carta.innerHTML = null;
  if (input.value.replace(/\s/g, '').length === 0) {
    const erro = document.createElement('span');
    erro.innerHTML = 'Por favor, digite o conteúdo da carta.';
    carta.appendChild(erro);
  } else {
    const inputArray = input.value.split(' ');
    for (let i = 0; i < inputArray.length; i += 1) {
      const content = document.createElement('span');
      content.classList.add(style[randomNumber(2)], size[randomNumber(2)]);
      content.classList.add(roll[randomNumber(1)], pitch[randomNumber(1)]);
      content.innerHTML = inputArray[i];
      content.addEventListener('click', changeClasses);
      carta.appendChild(content);
      contador.innerHTML = document.getElementsByTagName('span').length;
    }
  }
}

addButton.addEventListener('click', createLetter);
