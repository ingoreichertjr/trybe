import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Digimon from './Digimon';

afterEach(cleanup)

describe('Teste da tela do Digimon', () => {
  const { getByText, getByAltText } = screen;

  it('renders Digimon', async () => {
    const digimon = {
      name: 'Gabumon',
      img: 'https://digimon.shadowsmith.com/img/gabumon.jpg',
      level: 'Rookie'}

      render(<Digimon digimon={digimon} />)

    const digiName = await getByText('Gabumon');
    expect(digiName).toBeInTheDocument();
    const digiLevel = await getByText('level: Rookie');
    expect(digiLevel).toBeInTheDocument();
    const digiImage = await getByAltText('Gabumon');
    expect(digiImage).toBeInTheDocument();
  });
});
