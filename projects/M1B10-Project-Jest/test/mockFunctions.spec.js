const mock = require('../src/mockFunctions');

jest.mock('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo (maminha) feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  mock.add.mockImplementation((a, b) => a + b);
  mock.subtract.mockImplementation((a, b) => a - b);
  mock.multiply.mockImplementation((a, b) => a * b);
  mock.divide.mockImplementation((a, b) => a / b);
  mock.power.mockImplementation((a, b) => a ** b);
  mock.factorial.mockImplementation(((n) => ((n <= 0) ? 1 : n * mock.factorial(n - 1))));

  // NÃO FAÇO IDEIA COMO FUNCIONA, PEGUEI AQUI:
  // https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

  test('testa função add', () => {
    expect(mock.add(1, 2)).toEqual(3);
    expect(mock.add(8, 37)).toEqual(45);
    expect(mock.add(-11, 25)).toEqual(14);
    expect(mock.add(13, -188)).toEqual(-175);
    expect(mock.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(mock.subtract(899, 35)).toEqual(864);
    expect(mock.subtract(-17, 333)).toEqual(-350);
    expect(mock.subtract(45, 97)).toEqual(-52);
    expect(mock.subtract(23, -108)).toEqual(131);
    expect(mock.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(mock.multiply(1, 2)).toEqual(2);
    expect(mock.multiply(0, 5)).toEqual(0);
    expect(mock.multiply(-4, 9)).toEqual(-36);
    expect(mock.multiply(-12, -7)).toEqual(84);
    expect(mock.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(mock.divide(169, 13)).toEqual(13);
    expect(mock.divide(-1900, 5)).toEqual(-380);
    expect(mock.divide(42, 7)).toEqual(6);
    expect(mock.divide(729, 243)).toEqual(3);
    expect(mock.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(mock.power(10, 2)).toEqual(100);
    expect(mock.power(2, 10)).toEqual(1024);
    expect(mock.power(5, 5)).toEqual(3125);
    expect(mock.power(1, 10)).toEqual(1);
    expect(mock.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(mock.factorial(5)).toEqual(120);
    expect(mock.factorial(10)).toEqual(3628800);
    expect(mock.factorial(3)).toEqual(6);
    expect(mock.factorial(8)).toEqual(40320);
    expect(mock.factorial(2)).toEqual(2);
  });
});
