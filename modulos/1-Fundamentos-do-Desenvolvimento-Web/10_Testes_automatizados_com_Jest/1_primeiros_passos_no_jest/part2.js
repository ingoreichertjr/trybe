function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}

function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let techsSorted = techs.sort();
  let objects = [];
  for (let index = 0; index < techsSorted.length; index += 1) {
    objects.push({
      tech: techsSorted[index],
      name,
    });
  }
  return objects;
}

function hydrate(string) {
  let array = string.match(/\d+/g);
  let qtdAgua = 0;
  for (let index = 0; index < array.length; index += 1) {
    let number = parseInt(array[index], 10);
    qtdAgua += number;
  }
  if (qtdAgua === 1) {
    return '1 copo de água';
  }
  return `${qtdAgua} copos de água`;
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};