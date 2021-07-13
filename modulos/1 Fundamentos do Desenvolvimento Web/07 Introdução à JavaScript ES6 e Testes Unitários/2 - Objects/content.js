// Parte 1

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// function P1(obj, key, value) {
//   const objeto = obj;
//   objeto[key] = value;
//   console.log(objeto);
// }
// P1(customer, 'carro', 'civic');

// Parte 2

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// function P2(param) {
//   const student = param;
//   for (const i of Object.keys(student)) {
//     console.log(`${i}, Nível: ${student[i]}`);
//   }
// }

// console.log('Estudante 1');
// P2(student1);
// console.log('');
// console.log('Estudante 2');
// P2(student2);

// Parte 3

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// Parte 4

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// for (const [key, value] of pairKeyValue) {
//   console.log(`País ${key}, capital ${value}`);
// }

// for (const i of pairKeyValue) {
//   console.log(i);
//   console.log('--------');
//   console.log('País:', i[0]);
//   console.log('Capital:', i[1]);
// }

// Parte 5

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// // console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// // console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// const obj = { value1: 10, value2: 11 };
// const cloneObj = obj;

// cloneObj.value1 = 11;
// cloneObj.value2 = 10;
// console.log(obj);

const person = {
  name: 'Roberto',
};
const age = 'age';
person[age] = 20;
console.log(person['age']);
// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({}, person, lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);