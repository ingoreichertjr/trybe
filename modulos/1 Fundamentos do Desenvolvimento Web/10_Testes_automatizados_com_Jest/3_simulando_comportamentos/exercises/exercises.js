const randomNumber = () => Math.ceil(Math.random() * 100);

const uppercase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concatStrings = (string1, string2) => string1 + string2;

const fetch = require('node-fetch')

const fetchDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const jason = await response.json();
  return jason.message;
}

console.log(firstLetter('batata'));

module.exports = {
  randomNumber,
  uppercase,
  firstLetter,
  concatStrings,
  fetchDog,
};