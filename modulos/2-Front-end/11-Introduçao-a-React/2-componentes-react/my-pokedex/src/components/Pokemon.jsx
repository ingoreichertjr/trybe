import React, { Component } from 'react';

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
 
export default Pokemon;