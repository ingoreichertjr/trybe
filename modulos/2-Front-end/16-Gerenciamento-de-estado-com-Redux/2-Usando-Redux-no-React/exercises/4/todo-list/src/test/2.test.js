import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByLabelText,queryByText } = render(<App />);
    const taskInput = getByLabelText('Tarefa:');
    const btnAdd = queryByText('Adicionar');

    listTodo.forEach((item) => {
      expect(queryByText(item)).not.toBeInTheDocument()
    });

    listTodo.forEach((item) => {
      fireEvent.change(taskInput, { target: { value: item }});
      fireEvent.click(btnAdd);
    });

    listTodo.forEach((item) => {
      expect(queryByText(item)).toBeInTheDocument()
    });
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { queryByText } = render(<Item content={"I'm a string!"} />);

    expect(queryByText("I'm a string!")).toBeInTheDocument()
  })
})