// 1

// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   // MINHA SOLUÇÃO: NÃO CONSEGUI ENXERGAR UMA FORMA DE RESOLVER COM REDUCE.
//   const result = [] 
//   arrays.reduce((acc, item) => item.forEach(i => result.push(i)), 0)

//   // GABARITO: RESOLVEU USANDO CONCAT.
//   // const result = arrays.reduce((acc, item) => acc.concat(item), [])

//   return result;
// }

// // console.log(flatten());

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);



// Array para os exercicios 2, 3 e 4:

// const assert = require('assert');
// const { utimesSync } = require('fs');

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// 2

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   const ret = books.reduce((acc, item, i) => (i === books.length-1) ? `${acc} ${item.author.name}.` : `${acc} ${item.author.name},`, '')
//   return ret.slice(1)
// }

// assert.strictEqual(reduceNames(), expectedResult);


// 3

// const expectedResult = 43;

// function averageAge() {
//   const ageSum = books.reduce((acc, item) => {
//     const aux = item.releaseYear - item.author.birthYear;
//     return acc + aux;
//   }, 0)
//   return ageSum / books.length;
// }

// assert.strictEqual(averageAge(), expectedResult);


// 4

// const expectedResult = 'As Crônicas de Gelo e Fogo';

// function longestNamedBook() {
//   const ret = books.reduce((acc, item) => (acc.name.length > item.name.length) ? acc : item)
//   return ret.name
// }

// assert.deepStrictEqual(longestNamedBook(), expectedResult);


// 5

// const assert = require('assert');

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   const newArr = []
//   names.forEach(item => newArr.push(...item.toLowerCase()))
//   return newArr.reduce((acc, item) => item === 'a' ? acc += 1 : acc, 0)
// }

// assert.deepStrictEqual(containsA(), 20);


// 6

const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((item, i) => {
    const ave = grades[i].reduce((acc, grade) => acc + grade)
    return { name: item, average: ave / grades[i].length }
  })
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);