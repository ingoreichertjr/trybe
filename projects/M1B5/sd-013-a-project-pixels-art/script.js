// Generate random colors

// function checkWhite(red, green, blue) {
//   if (red === 255 && green === 255 && blue === 255) {
//     randomColor();
//   }
//   return `rgb(${red}, ${green}, ${blue})`;
// }

// function checkBlack(red, green, blue) {
//   if (red === 0 && green === 0 && blue === 0) {
//     randomColor();
//   }
//   return checkWhite(red, green, blue);
// }

// function checkColors(red, green, blue) {
//   if (red === green || red === blue) {
//     randomColor();
//   }
//   if (green === blue) {
//     randomColor();
//   }
//   return checkBlack(red, green, blue);
// }

function randomColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Create color palette

const black = document.createElement('div');
const colorPalette = document.querySelector('#color-palette');
black.classList.add('color', 'selected');
black.style.backgroundColor = 'black';
colorPalette.appendChild(black);

function generatePalette() {
  for (let i = 0; i < 3; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.style.backgroundColor = randomColor();
    colorPalette.appendChild(color);
  }
}

generatePalette();

// Generate new palette

const paletteButton = document.createElement('button');
const father = document.getElementById('color-palette-container');
paletteButton.id = 'palette-button';
paletteButton.innerHTML = 'Change Palette';
father.appendChild(paletteButton);

function generateNewPalette() {
  const cor = document.getElementsByClassName('color');
  for (let i = 1; i <= 3; i += 1) {
    cor[i].style.backgroundColor = randomColor();
  }
}

paletteButton.addEventListener('click', generateNewPalette);

// Select color from palette

const colors = document.getElementsByClassName('color');

function select(event) {
  const currentSelected = document.querySelector('.selected');
  currentSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', select);
}

// Fill pixel

const pixels = document.getElementsByClassName('pixel');

function fill(event) {
  const evento = event;
  const currentSelected = document.querySelector('.selected');
  const color = currentSelected.style.backgroundColor;
  evento.target.style.backgroundColor = color;
}

// Create pixel board

function createPixels(pixelQtt) {
  const linha = document.getElementsByClassName('linha');
  for (let i = 0; i < pixelQtt; i += 1) {
    for (let index = 0; index < pixelQtt; index += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.style.backgroundColor = 'rgb(255, 255, 255)';
      pixel.addEventListener('click', fill);
      linha[i].appendChild(pixel);
    }
  }
}

function createBoard(boardSize) {
  for (let i = 0; i < boardSize; i += 1) {
    const line = document.createElement('div');
    line.classList.add('linha');
    document.getElementById('pixel-board').appendChild(line);
  }
  createPixels(boardSize);
}

createBoard(5);

// Clear board button

const clearButton = document.getElementById('clear-board');

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);

// Generate custom board

const input = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');

function checkInput() {
  if (input.valueAsNumber < 5) {
    input.value = 5;
  }
  if (input.valueAsNumber > 50) {
    input.value = 50;
  }
  if (input.value.length === 0) {
    alert('Board inválido!');
  } else {
    document.getElementById('pixel-board').innerHTML = '';
    createBoard(input.valueAsNumber);
  }
}

generateButton.addEventListener('click', checkInput);
