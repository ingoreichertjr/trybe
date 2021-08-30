// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, myObject)
    .then((r) => r.json())
    .then((r) => {
      const h2 = document.getElementById('jokeContainer');
      const p = document.createElement('p')
      p.innerHTML = r.joke;
      h2.appendChild(p)
    });
};

window.onload = () => fetchJoke();