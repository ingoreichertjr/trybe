import React from 'react'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../redux/reducers';
import { render } from '@testing-library/react';

const createMockStore = (initialState) => (
  createStore(rootReducer, initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {}
) => ({
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
})

export default renderWithRedux;