const math = require('./math2');

// test("#somar", () => {
//   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//   const mockSomar = jest.spyOn(math, "somar");

//   mockSomar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   expect(mockSomar(1, 2)).resolves.toBe(3); //Falso-positivo
// });

// test("#somar", () => {
//   // testando a implementação original, o mock e o mock resetado

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3);

//   // criando o mock e substituindo a implementação para uma subtração
//   math.somar = jest.fn().mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar(5, 1)).toBe(4);
//   expect(math.somar).toHaveBeenCalledTimes(2);
//   expect(math.somar).toHaveBeenLastCalledWith(5, 1);

//   // resetando o mock
//   math.somar.mockReset();
//   expect(math.somar(1, 2)).toBe(undefined);
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenLastCalledWith(1, 2);
// });

test("#somar", async () => {
  // testando a implementação original, o mock e a restauração da função original
  let mockSomar = jest.spyOn(math, "somar")

  // implementação original
  await expect(mockSomar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
    mockSomar.mockImplementation((a, b) => a - b);

  mockSomar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(3);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // // restaurando a implementação original
  mockSomar.mockRestore();
  mockSomar = jest.spyOn(math, "somar")
  await expect(mockSomar(1, 2)).resolves.toBe(3);
});