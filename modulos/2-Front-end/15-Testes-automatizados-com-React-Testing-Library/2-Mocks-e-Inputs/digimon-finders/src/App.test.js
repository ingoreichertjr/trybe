import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(cleanup, () => jest.clearAllMocks())

describe('Teste da aplicação toda', () => {
  const { getByText, getByTestId, getByLabelText, findByText, findByAltText } = screen;

  it('renders App', () => {
    render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Check for input and button', () => {
    render(<App />);

    const searchInput = getByLabelText(/digimon/i)
    expect(searchInput).toBeInTheDocument()

    const searchButton = getByTestId('search-button')
    expect(searchButton).toBeInTheDocument()
  })

  it('Check for when a digimon is not found with inputted text', async () => {
    const error = 'Batata is not a digimon in our database'
    global.fetch = jest.fn(async () => {
      return {
        json: async () => ({ErrorMsg: error})
      }
    });

    render(<App />);

    const searchInput = getByLabelText(/digimon/i);
    userEvent.type(searchInput,'batata');
    const searchButton = getByTestId('search-button');
    userEvent.click(searchButton);

    const errorElement = await findByText(error);
    expect(errorElement).toBeInTheDocument();
  })

  it('Check for when a digimon is found', async () => {
    const jason = [{name: 'Gabumon', img: 'https://digimon.shadowsmith.com/img/gabumon.jpg', level: 'Rookie'}]
    global.fetch = jest.fn(async () => {
      return {
        json: async () => jason
      }
    });

    render(<App />);

    const searchInput = getByLabelText(/digimon/i);
    userEvent.type(searchInput,'Gabumon');
    const searchButton = getByTestId('search-button');
    userEvent.click(searchButton);

    const digiName = await findByText('Gabumon');
    expect(digiName).toBeInTheDocument();
    const digiLevel = await findByText('level: Rookie');
    expect(digiLevel).toBeInTheDocument();
    const digiImage = await findByAltText('Gabumon');
    expect(digiImage).toBeInTheDocument();
  })

  it('Check for when nothing is inserted in the search input', async () => {
    global.fetch = jest.fn(() => 'batata')

    render(<App />);

    const searchButton = getByTestId('search-button');
    userEvent.click(searchButton);

    expect(global.fetch).not.toHaveBeenCalled()
  })
});
