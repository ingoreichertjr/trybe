import React, { Component } from 'react';
import Pokemon from './Pokemon.jsx'

class Pokedex extends Component {
  render() { 
    const { pokemons } = this.props
    const list = pokemons.map((p) => <Pokemon key={p.id} pokemon={p} />)

    return (
      list
    );
  }
}
 
export default Pokedex;