const math = require('./math3');

test('1', () => {
  let mockSub  = jest.spyOn(math, 'subtrair')
  mockSub(2, 1);
  expect(mockSub).toHaveBeenCalled()
})

test('2', () => {
  math.multiplicar = jest.fn()
  math.multiplicar.mockReturnValue(10);
  expect(math.multiplicar()).toBe(10)
})

test('3', () => {
  math.somar  = jest.fn()
    .mockImplementation((a, b) => a + b);
  math.somar(1, 2)
  expect(math.somar).toHaveBeenCalled()
  expect(math.somar).toHaveBeenCalledTimes(1)
  expect(math.somar).toHaveBeenCalledWith(1, 2)
  expect(math.somar(2, 5)).toBe(7)
})

test('4', () => {
  math.dividir = jest.fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5)

  expect(math.dividir(20, 2)).toBe(2)
  expect(math.dividir(20, 2)).toBe(5)
  expect(math.dividir(20, 2)).toBe(15)
  expect(math.dividir).toHaveBeenCalled()
  expect(math.dividir).toHaveBeenCalledTimes(3)
  expect(math.dividir).toHaveBeenCalledWith(20, 2)
})

test('5', () => {
  let mockSub = jest.spyOn(math, 'subtrair')
  mockSub.mockRestore()
  mockSub.mockImplementation((a, b) => a + b)
  mockSub.mockReturnValue(20)

  expect(mockSub(5, 2)).toBe(20);
  expect(mockSub).toHaveBeenCalledTimes(1)

  mockSub.mockRestore()
  mockSub = jest.spyOn(math, 'subtrair')

  expect(mockSub(5, 2)).toBe(3)
  expect(mockSub).toHaveBeenCalled()
})