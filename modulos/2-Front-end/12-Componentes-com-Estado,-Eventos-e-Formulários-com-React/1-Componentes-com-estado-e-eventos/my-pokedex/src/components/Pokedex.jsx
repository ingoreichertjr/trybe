import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.jsx'
import Buttons from './Buttons.jsx';

// class Pokedex extends Component {
//   render() { 
//     const { pokemons } = this.props
//     const list = pokemons.map((p) => <Pokemon key={p.id} pokemon={p} />)

//     return (
//       list
//     );
//   }
// }

class Pokedex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokeIndex: 0,
      filteredPoke: props.pokemons,
    }

    this.functions.changePokemon = this.functions.changePokemon.bind(this);
    this.functions.changeType = this.functions.changeType.bind(this);
  }

  functions = {
    changePokemon() {
      const { pokeIndex, filteredPoke } = this.state;
      if (pokeIndex === filteredPoke.length - 1) {
        this.setState({pokeIndex: 0})
      } else {
        this.setState({pokeIndex: pokeIndex + 1})
      }
    },
    changeType(evt) {
      const { pokemons } = this.props;
      const type = evt.target.innerText
      const filtered = pokemons.filter(i => i.type === type)
  
      if (filtered.length === 0) {
        this.setState({filteredPoke: pokemons, pokeIndex: 0})
      } else if (filtered.length === 1) {
        this.setState({filteredPoke: pokemons.filter(i => i.type === type), pokeIndex: 0})
      } else {
        this.setState({filteredPoke: pokemons.filter(i => i.type === type), pokeIndex: 0})
      }
    },
  }

  render() {
    const { pokeIndex, filteredPoke } = this.state
    const { pokemons } = this.props

    return (
      <>
        <div className='pokedex'>
          <Pokemon pokemon={filteredPoke[pokeIndex]} />
        </div>
        <Buttons {...this.functions} pokemons={pokemons} status={filteredPoke.length <= 1}/>
      </>
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