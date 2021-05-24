// Parte 1 - Objetos e For/In

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// Exercicio 1

// console.log(`Bem-vinda, ${info.personagem}`);

// Exercicio 2

// info.recorrente = 'Sim'
// console.log(info);

// Exercicio 3
// for (let key in info) {
//   // console.log(key);
// }

// Exercicio 4
// for (let key in info) {
//   console.log(info[key]);
// }

// Exercicio 5

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178'`,
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };

// for (let key in info) {
//   if ((info[key] === info2[key]) && (info[key] === 'Sim') && (info2[key] === 'Sim')) {
//     console.log('Ambos recorrentes');
//   } else if ((info[key] === info2[key]) && (info[key] === 'Não') && (info2[key] === 'Não')){
//     console.log('Ambos não recorrentes');
//   } else {
//     console.log(`${info[key]} e ${info2[key]}`);
//   }
// }


// Parte 2 - Funções

// Exercicio 1

function palindromo(string) {
  let reversedString = string.split('').reverse().join('')
  if (string === reversedString) {
    return true
  }
  return false
}

// Exercicio 2

function highestIndex(array) {
  let highestNumber = array[0]
  for (index = 0; index <= array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index]
    }
  }
  for (index = 0; index <= array.length; index += 1) {
    if (highestNumber === array[index]) {
      return index
    }
  }
}

// Exercicio 3

function lowestIndex(array) {
  let lowestNumber = array[0]
  for (index = 0; index <= array.length; index += 1) {
    if (array[index] < lowestNumber) {
      lowestNumber = array[index]
    }
  }
  for (index = 0; index <= array.length; index += 1) {
    if (lowestNumber === array[index]) {
      return index
    }
  }
}

// Exercicio 4

function nameSize(array) {
  let longestNameIndex = 0

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > array[longestNameIndex].length) {
      longestNameIndex = index
    }
  }
  return array[longestNameIndex]
}

// Exercicio 5

function repeat(array) {
  let resultado = 0
  let repetitions = 0
  for (let index = 0; index < array.length; index += 1) {
    let repetitionsTemp = 0
    for (i = 0; i < array.length; i += 1) {
      if (array[index] === array[i]) {
        repetitionsTemp += 1
      }
    }
    if (repetitionsTemp > repetitions) {
      repetitions = repetitionsTemp
      resultado = index
    }
  }
  return array[resultado]
}

// Exercicio 6

function somatorio(N) {
  let somatorio = 0

  for (let index = 1; index <= N; index +=1) {
    somatorio += index
  }
  return somatorio
}

// Exercicio 7

function verifyEnding(word, ending) {
  let wordReversed = word.split('').reverse()
  let endingReversed = ending.split('').reverse()

  for (let index = 0; index < endingReversed.length; index += 1) {
    if (wordReversed[index] !== endingReversed[index]) {
      return false
    }
  }
  return true
}