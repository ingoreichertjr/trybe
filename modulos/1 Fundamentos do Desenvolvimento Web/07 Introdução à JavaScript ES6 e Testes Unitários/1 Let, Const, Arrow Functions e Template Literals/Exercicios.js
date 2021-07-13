// Parte 1

// 1

// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`);

// Parte 2

// 1

// const fatorial = N => {
//   let result = 1;
//   for (let i = 2; i <= N; i += 1) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(fatorial(5));

// 2

// const longestWord = (string) => {
//   const array = string.split(' ');
//   let result = array[0];

//   for (const i of array) { result = (i.length > result.length) ? i : result; }
//   return result;
// };

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 4

function func1(string1, string2) {
  return string1.replace(/x/gi, string2);
}

// console.log(func1('Tryber x aqui!', 'Bebeto'));

const skills = ['dormir', 'comer', 'ler', 'jogar', 'trybe'];

function func2(param) {
  return `${param} Minhas cinco principais habilidades são: ${(skills.sort()).join(', ')}.`;
}

console.log(func2(func1('Tryber x aqui!', 'Bebeto')));