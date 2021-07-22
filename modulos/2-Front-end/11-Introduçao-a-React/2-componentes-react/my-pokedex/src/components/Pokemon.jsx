import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() { 
    const { pokemon } = this.props;
    // console.log(this.props.pokemon);

    return ( 
      <div className='card'>
        <div className='pokeInfo'>
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.type}</p>
          <p>Avg weight: {`${pokemon.avgWeight.value}${pokemon.avgWeight.unit}`}</p>
        </div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    moreInfo: PropTypes.string,
    avgWeight: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    })
  }).isRequired,
}

Pokemon.propDefaults = {
  pokemon: {},
}
 
export default Pokemon;