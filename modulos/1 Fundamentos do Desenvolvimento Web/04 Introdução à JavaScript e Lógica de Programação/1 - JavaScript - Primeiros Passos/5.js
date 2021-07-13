let x = 60;
let y = 80;
let z = 40;

let somatorio = x + y + z;

if (x > 0 && y > 0 && z > 0) {
  if (somatorio == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro: angulos inválidos');
}

// if (x > 0 && y > 0 && z > 0 && somatorio == 180) {
//   console.log(true);
// } else if (x > 0 && y > 0 && z > 0 && somatorio != 180) {
//   console.log(false);
// } else {
// console.log('Erro: angulos inválidos');
// }