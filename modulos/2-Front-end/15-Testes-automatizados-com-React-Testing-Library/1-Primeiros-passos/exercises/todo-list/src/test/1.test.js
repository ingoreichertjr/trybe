import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  it('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />)
    const btnAdd = getByText('Adicionar');

    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd.type).toBe('button');
    expect(btnAdd).toHaveValue('Adicionar');
  })

  it(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    const { getByLabelText,queryByText } = render(<App />)
    const taskInput = getByLabelText('Tarefa:');
    const btnAdd = queryByText('Adicionar');

    expect(queryByText('Sou uma tarefa')).not.toBeInTheDocument()

    fireEvent.change(taskInput, { target: { value: 'Sou uma tarefa' }})
    fireEvent.click(btnAdd)

    expect(queryByText('Sou uma tarefa')).toBeInTheDocument()
  })
})