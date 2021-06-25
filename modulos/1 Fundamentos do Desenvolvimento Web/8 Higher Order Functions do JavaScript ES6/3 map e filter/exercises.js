const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

// function formatedBookNames() {
//   return books.map(item => `${item.name} - ${item.genre} - ${item.author.name}`)
// }

// assert.deepStrictEqual(formatedBookNames(), expectedResult);


// 2

// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

// function nameAndAge() {
//   const newArr = books.map(item => {
//     return {
//       age: (item.releaseYear - item.author.birthYear),
//       author: item.author.name,
//     }
//   });
//   return newArr.sort((a, b) => a.age - b.age)
// }

// assert.deepStrictEqual(nameAndAge(), expectedResult);


// 3

// const expectedResult = [
//   { 
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

// function fantasyOrScienceFiction() {
//   return books.filter(item => (item.genre === 'Fantasia' || item.genre === 'Ficção Científica'))
// }

// assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);


// 4

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered() {
//   const newArr = books.filter(item => (2021 - item.releaseYear) >= 60)
//   return newArr.sort((a, b) => a.releaseYear - b.releaseYear)
// }

// assert.deepStrictEqual(oldBooksOrdered(), expectedResult);


// 5

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors() {
//   let newArr = books.filter(item => (item.genre === 'Fantasia' || item.genre === 'Ficção Científica'));
//   newArr = newArr.map(item => item.author.name);
//   return newArr.sort();
// }

// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);


// 6

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks() {
//   let newArr = books.filter(item => (2021 - item.releaseYear) >= 60);
//   newArr = newArr.map(item => item.name);
//   return newArr
// }

// assert.deepStrictEqual(oldBooks(), expectedResult);


// 7

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  let result;
  books.forEach((item, index) => {
    const name = item.author.name.split(' ');
    let counter = 0;
    name.forEach(i => {
      counter += i.endsWith('.') ? 1 : null
    })
    result = (counter === 3) ? index : result
  })
  return books[result].name
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);