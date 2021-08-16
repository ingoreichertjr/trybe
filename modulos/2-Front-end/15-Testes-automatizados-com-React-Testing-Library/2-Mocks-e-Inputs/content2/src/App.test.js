// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App';
it('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputNome = screen.getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});