const { createStore, combineReducers } = Redux;

const initialState_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const initialState_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const reducer1 = (state = initialState_1, action) => {
  switch (action.type) {
    case 'state1':
      return { ...state, nome: action.firstName, sobrenome: action.lastName };

      default:
        return state;
  }
};

const reducer2 = (state = initialState_2, action) => {
  switch (action.type) {
    case 'state2':
      return { ...state, nome: action.firstName, sobrenome: action.lastName };

      default:
        return state;
  }
};

const combinedReducers = combineReducers({ reducer1, reducer2 });
const store = createStore(combinedReducers)

updateFirstState = (firstName, lastName) => ({
  type: 'state1',
  firstName,
  lastName,
});

updateSecondState = (firstName, lastName) => ({
  type: 'state2',
  firstName,
  lastName,
});

store.subscribe(() => {
  const firstName1 = document.querySelector('#nome-1');
  const lastName1 = document.querySelector('#sobrenome-1');
  const firstName2 = document.querySelector('#nome-2');
  const lastName2 = document.querySelector('#sobrenome-2');

  const { reducer1, reducer2} = store.getState();
  firstName1.innerHTML = reducer1.nome
  lastName1.innerHTML = reducer1.sobrenome
  firstName2.innerHTML = reducer2.nome
  lastName2.innerHTML = reducer2.sobrenome
})

setTimeout(() => {
  store.dispatch(updateFirstState('Teobaldo', 'Viana'));
  store.dispatch(updateSecondState('Dona', 'Gertrudes'));
}, 3000)