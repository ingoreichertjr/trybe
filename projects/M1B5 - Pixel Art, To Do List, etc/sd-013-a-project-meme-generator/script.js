const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const images = document.getElementsByClassName('images');

textInput.addEventListener('input', () => {
  memeText.innerHTML = textInput.value;
});

imageInput.addEventListener('input', () => {
  memeImage.src = URL.createObjectURL(imageInput.files[0]);
});

fireButton.addEventListener('click', () => {
  memeContainer.className = 'fire';
});

waterButton.addEventListener('click', () => {
  memeContainer.className = 'water';
});

earthButton.addEventListener('click', () => {
  memeContainer.className = 'earth';
});

for (let i = 0; i < images.length; i += 1) {
  images[i].addEventListener('click', () => {
    memeImage.src = images[i].src;
  });
}
