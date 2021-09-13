// src/Cars.jsx

import React, { useContext } from 'react';
import { myContext } from './myContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const {cars, setCars} = useContext(myContext)
  const {red, blue, yellow} = cars
  return (
    <div>
      <div>
        <img
          className={red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => setCars((state) => ({...state, red: !state.red }))}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => setCars((state) => ({...state, blue: !state.blue }))}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => setCars((state) => ({...state, yellow: !state.yellow }))}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

export default Cars;
