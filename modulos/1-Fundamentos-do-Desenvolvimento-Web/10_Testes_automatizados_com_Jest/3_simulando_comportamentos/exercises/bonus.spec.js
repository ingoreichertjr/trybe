const bonus = require('./bonus')

const joke = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

const fetch = require('node-fetch')
jest.mock('node-fetch')

fetch.mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(joke)
  })
})

test('teste', async () => {
  await expect(bonus.fetchJoke()).resolves.toBe(joke.joke)
})