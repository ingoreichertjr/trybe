// Para rodar os testes, use o comando "npm test" no terminal

// 1

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 1000)
};

describe('1', () => {

//Syntax 1:

  // test('test uppercase', (done) => {
  //   uppercase('batata', (result) => {
  //     expect(result).toBe('BATATA')
  //     done()
  //   })
  // })

//Syntax 2:

  test('test uppercase', (done) => {
    const callback = (result) => {
      expect(result).toBe('BATATA')
      done()
    }
    uppercase('batata', callback)
  })
})


// Code for 2 and 3

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// 2

describe('2', () => {
  test('promise: test when user is found', () => {
    return expect(getUserName(4)).resolves.toEqual('Mark')
  })
  test('promise: test when user is not found', () => {
    return expect(getUserName(6)).rejects.toEqual({ error: 'User with ' + 6 + ' not found.' })
  })
})

// 3

describe('3', () => {
  test('async/await: test when user is found', async () => {
    await expect(getUserName(4)).resolves.toEqual('Mark')
  })
  test('async/await: test when user is not found', async () => {
    await expect(getUserName(6)).rejects.toEqual({ error: 'User with ' + 6 + ' not found.' })
  })
})

// 4

const fetch = require('node-fetch');

const api_url = 'https://api.github.com/orgs/tryber/repos'

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    }).catch(() => {
      throw new Error('Deu ruim')
    })
};

describe('check if api return containt specific repos', () => {
  it('check for sd-01-week4-5-project-todo-list repo', async () => {
    await expect(getRepos(api_url)).resolves.toContain('sd-01-week4-5-project-todo-list')
  })
  it('check for sd-01-week4-5-project-meme-generator repo', async () => {
    await expect(getRepos(api_url)).resolves.toContain('sd-01-week4-5-project-meme-generator')
  })
  // it('check error', async () => {
  //   await expect(getRepos(api_url)).rejects.toThrowError('Deu ruim')
  // })
})

// 5

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// '1 - beforeEach'
// '1 - test'
// '1 - afterEach'
// '1 - beforeEach'
// '2 - beforeEach'
// '2 - test'
// '2 - afterEach'
// '1 - afterEach'

// 6

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const theAnimal = Animals.filter((i) => i.name === name)
      if (theAnimal.length > 0) {
        return resolve(theAnimal)
      }
      return reject('Nenhum animal com esse nome!')
    }, 500)
  })
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsFound = Animals.filter((i) => i.age === age)
      if (animalsFound.length > 0) {
        return resolve(animalsFound)
      }
      return reject('Nenhum animal com essa idade!')
    }, 500)
  })
};

const getAnimal = async (param) => {
  if (typeof(param) === 'string') {
    const ret = await findAnimalByName(param)
    return ret[0]
  }
   if (typeof(param) === 'number') {
    const ret = await findAnimalByAge(param)
    return ret
  }
};

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      // expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      // expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise findAnimalByAge', () => {
  describe('Quando existem animais com a idade procurada', () => {
    test('Retorne o objeto do animal', async () => {
      const expected = [{ name: 'Preguiça', age: 5, type: 'Cat' },];
      await expect(getAnimal(5)).resolves.toEqual(expected)
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    test('Retorna um erro', async () => {
      await expect(getAnimal(11)).rejects.toEqual('Nenhum animal com essa idade!')
    });
  });
});