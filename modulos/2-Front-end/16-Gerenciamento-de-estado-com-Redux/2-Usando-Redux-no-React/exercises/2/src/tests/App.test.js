import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'
import renderWithRedux from './RenderWithRedux';

afterEach(cleanup);

describe('testing App component', () => {
  test('should have 3 "move" buttons on screen', () => {
    renderWithRedux(<App />)
  
    const moveButtons = screen.getAllByText('move')
    expect(moveButtons).toHaveLength(3)
  })

  test('should have 3 cars with one color each', () => {
    renderWithRedux(<App />)
  
    const redCar = screen.getByAltText('red car')
    const blueCar = screen.getByAltText('blue car')
    const yellowCar = screen.getByAltText('yellow car')
    expect(redCar).toBeInTheDocument()
    expect(blueCar).toBeInTheDocument()
    expect(yellowCar).toBeInTheDocument()
  })
})