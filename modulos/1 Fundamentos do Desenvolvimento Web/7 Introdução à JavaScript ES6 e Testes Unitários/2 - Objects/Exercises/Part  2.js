const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addTurno = (objeto, chave, valor) => objeto[chave] = valor
addTurno(lesson2, 'turno', 'manha')
// console.log(lesson2)

// 2
const keysList = (objeto) => Object.keys(objeto);
// console.log(keysList(lesson2));

// 3 (tamanho = quantidade de keys???)
const objSize = (objeto) => Object.keys(objeto).length
// console.log(objSize(lesson3));

//4 
const objValues = (objeto) => Object.values(objeto);
// console.log(objValues(lesson3));

// 5
const allLessons = { lesson1, lesson2, lesson3 };
// const allLessons = {}
// Object.assign(allLessons, {lesson1, lesson2, lesson3})
// console.log(allLessons);

// 6
const studentCount = (objeto) => {
  let total = 0;
  const keys = Object.keys(objeto);
  for (const i of keys) {
    total += objeto[i].numeroEstudantes;
  }
  return total;
}
// console.log(studentCount(allLessons));

// 7
const valueByIndex = (objeto, i) => {
  const keys = Object.keys(objeto);
  return objeto[keys[i]];
}
// console.log(valueByIndex(lesson3, 0));

// 8
const checkKeyValue = (objeto, key, value) => {
  let result = false;
  const entries = Object.entries(objeto)
  for (const i of entries) {
    if ((i.includes(key)) && (i.includes(value))) {
      return true;
    }
  }
  return false;
};
// console.log(checkKeyValue(lesson3, 'materia', 'Maria Clara'));

// const arr = ['gabriel', 'gaspar'];
// const [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);
