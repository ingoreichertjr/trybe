const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
} = require('./part1.js')

describe('Test sum function', () => {
  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  it('throw an error when receive a non-number argument', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'))
  })
})

describe('test myRemove function', () => {
  const arr = [1, 2, 3, 4];
  it('remove 3', () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4])
  })
  it('return same array if cant find item', () => {
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4])
  })
})

describe('test myRemoveWithoutCopy function', () => {
  it('Teste 1', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  it('Teste 2', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  const arr2 = [2, 4, 6, 8]
  myRemoveWithoutCopy(arr2, 4)
  it('Teste 3', () => {
    expect(arr2.length).toBe(3)
  })
  it('Teste 4', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe('test myFizzBuzz function', () => {
  it('Teste 1', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('Teste 2', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  it('Teste 3', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  it('Teste 4', () => {
    expect(myFizzBuzz(7)).toBe(7)
  })
  it('Teste 5', () => {
    expect(myFizzBuzz('x')).toBe(false)
  })
})

describe('test objects for equality', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };
  it('obj1 === obj2', () => {
    expect(obj1).toEqual(obj2)
  })
  it('obj1 !== obj3', () => {
    expect(obj1).not.toEqual(obj3)
  })
  it('obj2 !== obj3', () => {
    expect(obj2).not.toEqual(obj3)
  })
})