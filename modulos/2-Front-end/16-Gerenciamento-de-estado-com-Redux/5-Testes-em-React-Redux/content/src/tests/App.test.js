import React from 'react'
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from './RenderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });

  test('check if component renders with counter as 5', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('check a click with component rendered with custom state', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    expect(screen.getByText('11')).toBeInTheDocument();
  });
});