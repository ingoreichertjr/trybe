const fetch = require('node-fetch')

// const fakeFetch = () => Promise.resolve(
//   {json: () => Promise.resolve('Batatas são gostosas')}
// )

// const queroBatata = async () => {
//   const res = await fakeFetch()
//   const batata = await res.json();
//   console.log(batata);
// }

// queroBatata()


const piada = async () => {
  const API_URL = 'https://icanhazdadjoke.com/';
  const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
  const data = await response.json();
  const joke = data.joke;
  console.log(joke);
}

piada()