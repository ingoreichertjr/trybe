const Redux = require('redux')

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

const handleLunch = (food, drink) => ({
  type: 'ALMOÇO',
  food,
  drink,
});

const ESTADO1_INICIAL = {
  login: false,
  email: "",
};

const ESTADO2_INICIAL = {
  comida: '',
  bebida: '',
};

const reducer1 = (state = ESTADO1_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const reducer2 = (state = ESTADO2_INICIAL, action) => {
  switch (action.type) {
    case "ALMOÇO":
      return {
        ...state,
        comida: action.food,
        bebida: action.drink,
      };
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({ reducer1, reducer2 })

const store = Redux.createStore(combinedReducers);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fazerLogin('batata@frita.com'));

store.dispatch(handleLunch('Pizza de calabresa', 'Coca trincando de gelada'));




// EXPERIMENTO:

// const Redux = require('redux')

// const fazerLogin = (email) => ({
//   type: 'LOGIN',
//   email,
// });

// const handleLunch = (food, drink) => ({
//   type: 'ALMOÇO',
//   food,
//   drink,
// });

// const ESTADO_INICIAL = {
//   auth: {
//     login: false,
//     email: "",
//   },
//   lunch: {
//     comida: '',
//     bebida: '',
//   }
// };

// const reducer = (state = ESTADO_INICIAL, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         auth: {
//           login: !state.auth.login,
//           email: action.email,
//         }
//       };
//       case "ALMOÇO":
//       return {
//         ...state,
//         lunch: {
//           comida: action.food,
//           bebida: action.drink,
//         }
//       };
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// console.log(store.getState());

// store.dispatch(fazerLogin('batata@frita.com'));

// console.log(store.getState());

// store.dispatch(handleLunch('Pizza de calabresa', 'Coca trincando de gelada'));

// console.log(store.getState());