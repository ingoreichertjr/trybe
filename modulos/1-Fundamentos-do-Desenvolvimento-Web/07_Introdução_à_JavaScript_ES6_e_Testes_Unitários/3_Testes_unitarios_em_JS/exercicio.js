// Parte 1

// 1

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// assert.strictEqual(sum(4, 5), 9);
// assert.strictEqual(sum(0, 0), 0);
// assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/);

// 2

// const assert = require('assert');

// function myRemove(arr, item) {
//   const newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
// const param = [1, 2, 3, 4];
// assert.deepStrictEqual(param, [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), param, `Erro: esperado receber [${param}]`);

// 3

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// const param = [2, 4, 6, 8];
// myRemoveWithoutCopy(param, 3);
// assert.deepStrictEqual(param.length, 3);
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// 4

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(9), 'fizz');
// assert.strictEqual(myFizzBuzz(10), 'buzz');
// assert.strictEqual(myFizzBuzz(7), 7);
// assert.strictEqual(myFizzBuzz('x'), false);

// 5

// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);

// Parte 2

// 1

// const assert = require('assert');

// function addOne(param) {
//   const result = [];
//   for (const i of param) {
//     result.push(i + 1);
//   }
//   return result;
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// 2

// const assert = require('assert');

// function wordLengths(array) {
//   const result = [];
//   for (const i of array) {
//     result.push(i.length);
//   }
//   return result;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// 3

// const assert = require('assert');

// function sumAllNumbers(array) {
//   const result = array.reduce((a, b) => a + b);
//   console.log(result);
//   return result;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

// 4

// const assert = require('assert');

// function findTheNeedle(array, string) {
//   let result = -1;
//   if (array.includes(string)) { result = array.indexOf(string); }
//   return result;
// }

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// Parte 3

// 1

// const assert = require('assert');

// const greetPeople = (people) => {
//   const greeting = [];

//   for (const person of people) {
//      greeting.push(`Hello ${person}`);
//   }
//   return greeting;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.deepStrictEqual(greetPeople(parameter), result);

// 2

// const assert = require('assert');

// const removeVowels = (word) => {
//   const characters = word.split('');
//   let counter = 1
//   const results = [];

//   for (let index = 0; index < characters.length; index += 1) {
//     if (
//       characters[index] === 'a' ||
//       characters[index] === 'o' ||
//       characters[index] === 'i' ||
//       characters[index] === 'e' ||
//       characters[index] === 'u'
//     ) {
//       results.push(counter);
//       counter += 1
//     } else {
//       results.push(characters[index]);
//     }
//   }
//   return results.join('');
// };


// const parameter = 'Dayane';
// const result = 'D1y2n3';

// assert.strictEqual(removeVowels(parameter), result);

// 3

// const { AssertionError } = require('assert');

// const assert = require('assert');

// const greaterThanTen = (array) => {
//   const results = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] > 10) {
//       results.push(array[index]);
//     }
//   }
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21];
// const result = [32, 21];

// assert.deepStrictEqual(greaterThanTen(parameter), result);

// 4

// const assert = require('assert')

// function secondThirdSmallest(array) {
//   const sorted = array.sort(function (x, y) {
//       return x - y;
//   });

//   const results = [sorted[1], sorted[2]];
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
// const result = [5, 6];

// assert.deepStrictEqual(secondThirdSmallest(parameter), result)