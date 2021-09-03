const ex = require('./exercises')

let rng = jest.spyOn(ex, 'randomNumber')

test('1', () => {
  rng.mockReturnValue(10)

  expect(rng()).toBe(10);
  expect(rng).toHaveBeenCalled();
  expect(rng).toHaveBeenCalledTimes(1)
})

test('2', () => {
  rng.mockRestore();
  rng.mockImplementation((a, b) => a / b)

  expect(rng(10, 2)).toBe(5);
  expect(rng).toHaveBeenCalled();
  expect(rng).toHaveBeenCalledTimes(1)
  expect(rng).toHaveBeenCalledWith(10, 2);
})

test('3', () => {
  rng.mockRestore();
  rng.mockImplementation((a, b, c) => a * b * c)

  expect(rng(10, 2, 4)).toBe(80);
  expect(rng).toHaveBeenCalled();
  expect(rng).toHaveBeenCalledTimes(1)
  expect(rng).toHaveBeenCalledWith(10, 2, 4);

  rng.mockRestore();
  rng.mockImplementation((a) => a * 2)

  expect(rng(7)).toBe(14);
  expect(rng).toHaveBeenCalled();
  expect(rng).toHaveBeenCalledTimes(1)
  expect(rng).toHaveBeenCalledWith(7);
})

let upper = jest.spyOn(ex, 'uppercase');
let firstL = jest.spyOn(ex, 'firstLetter');
let concStr = jest.spyOn(ex, 'concatStrings');

test('4', () => {
  upper.mockImplementation((string) => string.toLowerCase())

  expect(upper('BATATA')).toBe('batata');
  expect(upper).toHaveBeenCalled();
  expect(upper).toHaveBeenCalledTimes(1)
  expect(upper).toHaveBeenCalledWith('BATATA');

  firstL.mockImplementation((string) => string[string.length - 1])

  expect(firstL('BATATAz')).toBe('z');
  expect(firstL).toHaveBeenCalled();
  expect(firstL).toHaveBeenCalledTimes(1)
  expect(firstL).toHaveBeenCalledWith('BATATAz');

  concStr.mockImplementation((str1, str2, str3) => str1+str2+str3)

  expect(concStr('eu', 'nao', 'sei')).toBe('eunaosei');
  expect(concStr).toHaveBeenCalled();
  expect(concStr).toHaveBeenCalledTimes(1)
  expect(concStr).toHaveBeenCalledWith('eu', 'nao', 'sei');
})

test('5', () => {
  expect(upper('BATATA')).toBe('batata');
  expect(upper).toHaveBeenCalled();
  expect(upper).toHaveBeenCalledTimes(2)
  expect(upper).toHaveBeenCalledWith('BATATA');

  upper.mockRestore()
  upper = jest.spyOn(ex, 'uppercase');

  expect(upper('batata')).toBe('BATATA');
  expect(upper).toHaveBeenCalled();
  expect(upper).toHaveBeenCalledTimes(1)
  expect(upper).toHaveBeenCalledWith('batata');
})

let getDog = jest.spyOn(ex, 'fetchDog')

test('6', async () => {
  getDog.mockResolvedValue('request sucess')
  await expect(getDog()).resolves.toBe('request sucess')

  getDog.mockRejectedValue('request failed')
  await expect(getDog()).rejects.toBe('request failed')
})