import React, { Component } from 'react';

class PokemonDetails extends Component {

  GetHabitat(locs) {
    return locs.map(l => (
      <div key={l.location}>
        <p>{l.location}</p>
        <img src={l.map} alt="map" />
      </div>
    ))
  }

  render() {
    const { pokemons } = this.props;
    const { id } = this.props.match.params;
    const { name, type, avgWeight, image, foundAt, summary} = pokemons.find(p => p.id === parseInt(id))
    return (
      <div>
        <img src={image} alt={name} />
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso: {avgWeight.value + avgWeight.unit}</p>
        <p>Sumário: {summary}</p>
        <p>{name} can be found in: <br /> {this.GetHabitat(foundAt)}</p>
      </div>

    );
  }
}
 
export default PokemonDetails;