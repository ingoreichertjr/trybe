import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

afterEach(cleanup);

describe('Tests for FavoritePokemons.js', () => {
  it('Check for message "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);

    const message = screen.getByText('No favorite pokemon found');
    expect(message).toBeInTheDocument();
  });

  it('Check for favorite pokemon card', () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText('More details'));
    userEvent.click(screen.getByLabelText('Pokémon favoritado?'));
    userEvent.click(screen.getByRole('link', { name: 'Favorite Pokémons' }));

    expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
  });
});
