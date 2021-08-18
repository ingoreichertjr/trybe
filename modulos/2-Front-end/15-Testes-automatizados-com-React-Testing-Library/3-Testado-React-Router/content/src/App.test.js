import React from 'react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

const { getByText } = screen;

describe('Testando a aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.click(getByText(/Sobre/i));

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
})
