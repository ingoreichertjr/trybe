import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const btn = getAllByRole('button');
  expect(btn.length).toBe(2);
});

test("Verificando se existe um botão de 'Enviar'", () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test("Verifica lógica de salvar email", () => {
  const { getByLabelText, getByTestId } = render(<App />);

  const USER_EMAIL = 'picanha@churrasco.com'

  const emailInput = getByLabelText('Email');
  const sendBtn = getByTestId('id-send');
  const savedEmail = getByTestId('id-email-user');

  expect(savedEmail).toBeInTheDocument();
  expect(savedEmail).toHaveTextContent('Valor:');

  fireEvent.change(emailInput, { target: { value: USER_EMAIL }});
  fireEvent.click(sendBtn);

  expect(savedEmail).toHaveTextContent(`Valor: ${USER_EMAIL}`)
  expect(emailInput).toHaveValue('')
})
