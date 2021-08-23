const { createStore } = Redux;

const initialState = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case 'nextColor':
      return state.index === state.colors.length - 1 ? { ...state, index: 0 }
      : { ...state, index: state.index + 1 };

    case 'prevColor':
      return state.index === 0 ? { ...state, index: state.colors.length - 1 }
      : { ...state, index: state.index - 1 };

    case 'random':
      return {
        ...state,
        colors: [...state.colors, action.newColor],
        index: state.colors.length
      }

    default:
      return state;
  }
}

const store = createStore(reduce)

function createColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const handleNext = () => ({
  type: 'nextColor'
})

const handlePrev = () => ({
  type: 'prevColor'
})

const handleRandom = () => ({
  type: 'random',
  newColor: createColor()
})

const nextBtn = document.querySelector('#next');
nextBtn.addEventListener('click', () => store.dispatch(handleNext()));

const prevBtn = document.querySelector('#previous');
prevBtn.addEventListener('click', () => store.dispatch(handlePrev()));

const randomBtn = document.querySelector('#random')
randomBtn.addEventListener('click', () => store.dispatch(handleRandom()))

const value = document.querySelector('#value');
const container = document.querySelector('#container');
store.subscribe(() => {
  const { colors, index } = store.getState();
  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
})