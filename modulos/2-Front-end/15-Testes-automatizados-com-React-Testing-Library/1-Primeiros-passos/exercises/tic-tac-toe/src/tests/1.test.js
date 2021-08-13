import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import TicTacToe from '../TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    const casas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const { getByTestId } = render(<TicTacToe />)

    casas.forEach((c) => {
      expect(getByTestId(`cell_${c}`)).toBeInTheDocument()
    })
  });

  test('Começar com todos os espaços em branco.', () => {
    const casas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const { getByTestId } = render(<TicTacToe />)

    casas.forEach((c) => {
      expect(getByTestId(`cell_${c}`)).toBeEmpty()
    })
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const { queryByText } = render(<TicTacToe />)

    expect(queryByText('Fim de jogo')).not.toBeInTheDocument()
  });
});