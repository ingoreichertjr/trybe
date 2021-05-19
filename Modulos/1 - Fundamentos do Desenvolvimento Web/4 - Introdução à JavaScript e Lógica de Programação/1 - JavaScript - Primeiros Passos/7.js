let nota = -1;

if (nota <= 100 && nota >= 90) {
  console.log('A');
} else if (nota < 100 && nota >= 80) {
  console.log('B');
} else if (nota < 100 && nota >= 70) {
  console.log('C');
} else if (nota < 100 && nota >= 60) {
  console.log('D');
} else if (nota < 100 && nota >=50) {
  console.log('E');
} else if (nota >= 0 && nota < 50) {
  console.log('F');
} else {
  console.log('Erro: nota inválida');
}