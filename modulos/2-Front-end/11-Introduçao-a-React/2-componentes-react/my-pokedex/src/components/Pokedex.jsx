import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
}

Pokedex.propDefaults = {
  pokemons: [],
}
 
export default Pokedex;