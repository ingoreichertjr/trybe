let salarioBruto = 3000;
let aliquotaINSS;
let salarioBase;
let aliquotaIR;
let salarioLiquido;

//calculo para salário base (bruto - INSS):

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto*0.08
  salarioBase = salarioBruto - aliquotaINSS
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto*0.09
  salarioBase = salarioBruto - aliquotaINSS
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto*0.11
  salarioBase = salarioBruto - aliquotaINSS
} else if (salarioBruto > 5189.82) {
  aliquotaINSS = 570.88
  salarioBase = salarioBruto - aliquotaINSS
}

//calculo para salário liquido (base - IR) (*IR = valor da aliquota - restituição):

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase
} else if (salarioBase <= 2826.65) {
  aliquotaIR = salarioBase*0.075 - 142.80
  salarioLiquido = salarioBase - aliquotaIR
} else if (salarioBase <= 3751.05) {
  aliquotaIR = salarioBase*0.15 - 354.80
  salarioLiquido = salarioBase - aliquotaIR
} else if (salarioBase <= 4664.68) {
  aliquotaIR = salarioBase*0.225 - 636.13
  salarioLiquido = salarioBase - aliquotaIR
} else if (salarioBase > 4664,68) {
  aliquotaIR = salarioBase*0.275 - 869.36
  salarioLiquido = salarioBase - aliquotaIR
}

// console.log("Salário Bruto: " + salarioBruto);
// console.log("Aliquota INSS: " + aliquotaINSS);
// console.log("Salário Base: " + salarioBase);
// console.log("Aliquota IR: " + aliquotaIR);
console.log("Salário Líquido: " + salarioLiquido);


// Calculo salário depois da Trybe pegar a parte dela:

// let aliquotaTrybe = salarioBruto*0.17
// let salarioFinal = salarioLiquido - aliquotaTrybe

// console.log("Aliquota Trybe: " + aliquotaTrybe);
// console.log("Salário Final: " + salarioFinal);