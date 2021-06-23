// 1

// const employeeId = (nome) => {
//   return {
//     nomeCompleto: nome,
//     email: `${nome.replace(' ', '_')}@trybe.com`
//   }
// }

// const newEmployees = () => {
//   const employees = {
//     id1: employeeId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: employeeId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: employeeId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.table(newEmployees());


// 2

// const aux = (n, x) => {
//   return (n === x) ? 'Parabéns você ganhou' : 'Tente novamente';
// }

// const checkNumber = (n, checker) => {
//   const numberDrawn = Math.ceil(Math.random() * 5);
//   return console.log(checker(n, numberDrawn));
// }
// checkNumber(4, aux)


// 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const aux = (a, b) => {
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result += (b[i] === 'N.A') ? null
    : (b[i] === a[i]) ? 1 : -0.5
  }
  return result
}

const HOF = (arr1, arr2, func) => console.log(`Sua pontuação final foi de ${func(arr1, arr2)}`);

HOF(rightAnswers, studentAnswers, aux)