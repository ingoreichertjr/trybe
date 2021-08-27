import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from '../redux';
import { render } from '@testing-library/react';

const createMockStore = (initialState) => (
  createStore(reducer, initialState)
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {}
) => ({
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
})

export default renderWithRedux;
