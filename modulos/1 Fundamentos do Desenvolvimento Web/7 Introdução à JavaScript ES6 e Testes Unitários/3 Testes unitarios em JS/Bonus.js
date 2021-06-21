// Bonus 1

// function getChange(payable, paid) {
//   const coins = [200, 100, 50, 20, 10, 5, 2, 1];
//   const change = [];
//   let remaining = paid - payable;

//   if (remaining < 0) {throw new Error('paid value is not enough')}

//   for (const i of coins) {
//     for (i; i <= remaining;) {
//       change.push(i)
//       remaining -= i
//     }
//   }
//   return change;
// }

// const { throws } = require('assert');
// const assert = require('assert');

// let result = getChange(1, 1); // no change/coins just an empty array
// let expected = [];
// assert.deepStrictEqual(result, expected);

// result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
// expected = [50, 20, 10, 5];
// assert.deepStrictEqual(result, expected);

// result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
// expected = [100, 10, 2, 2];
// assert.deepStrictEqual(result, expected);

// result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
// expected = [200, 100, 50, 20, 10, 5, 2, 1];
// assert.deepStrictEqual(result, expected);

// assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);


// Bonus 2

// const assert = require('assert');

// const factorial = (n) => {
//   let result = 1;
//   for (let i = 2; i <= n; i += 1) {
//     result = result * i;
//   }
//   return result;
// }

// const in1 = 5;
// const exp1 = 120;

// const in2 = 9;
// const exp2 = 362880;

// const in3 = 1;
// const exp3 = 1;

// const in4 = 0;
// const exp4 = 1;

// const in5 = 3;
// const exp5 = 6;

// const out1 = factorial(in1);
// const out2 = factorial(in2);
// const out3 = factorial(in3);
// const out4 = factorial(in4);
// const out5 = factorial(in5);

// assert.strictEqual(out1, exp1);
// assert.strictEqual(out2, exp2);
// assert.strictEqual(out3, exp3);
// assert.strictEqual(out4, exp4);
// assert.strictEqual(out5, exp5);


// Bonus 3

// const assert = require('assert');

// const removeMiddle = (array) => {
//   const middle = (array.length - 1) / 2;
//   const removed = [array[middle]]
//   array.splice(middle, 1);
//   return removed;
// }


// const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
// const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
// const expectedOutput = ['queen'];
// const output = removeMiddle(words);

// assert.deepStrictEqual(output, expectedOutput);
// assert.deepStrictEqual(words, expectedWords);


// Bonus 4

// const assert = require('assert');

// const getLargestNumber = (array) => {
//   let largestNumber = array[0];
//   for (let index = 1; index < array.length; index += 1) {
//       if (largestNumber < array[index]) {
//           largestNumber = array[index];
//       }
//   }
//   return largestNumber
// }

// const parameter = [45, 8, 2, 50, 1, 7, 99];
// const result = 99;
// const output = getLargestNumber(parameter);

// assert.strictEqual(output, result);


// Bonus 5

const verify = (param) => {
  const regexUppercase = /[A-Z]/;
  const regexLowercase = /[a-z]/;
  const regexNumber = /[0-9]/;

  return (param === null) ? false
  : (param.length < 8) ? false
  : (!regexUppercase.test(param)) ? false
  : (!regexLowercase.test(param)) ? false
  : (!regexNumber.test(param)) ? false
  : true
}


console.log(verify('Test1234'));