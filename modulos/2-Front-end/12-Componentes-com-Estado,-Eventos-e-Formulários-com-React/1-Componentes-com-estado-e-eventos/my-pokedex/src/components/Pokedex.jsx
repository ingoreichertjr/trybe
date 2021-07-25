import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Pokedex.css'
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

    this.functions.nextPoke = this.functions.nextPoke.bind(this);
    this.functions.changeType = this.functions.changeType.bind(this);
  }

  functions = {
    nextPoke() {
      const { pokeIndex, filteredPoke } = this.state;

      pokeIndex === filteredPoke.length - 1 ? this.setState({pokeIndex: 0})
        : this.setState({pokeIndex: pokeIndex + 1})
    },
    changeType(evt) {
      const { pokemons } = this.props;
      const type = evt.target.innerText
      const filtered = pokemons.filter(i => i.type === type)

      type === 'All' ? this.setState({filteredPoke: pokemons, pokeIndex: 0})
        : this.setState({filteredPoke: filtered, pokeIndex: 0})
    },
  }

  render() {
    const { pokeIndex, filteredPoke } = this.state
    const { nextPoke, changeType } = this.functions
    const { pokemons } = this.props

    const allTypes = [...new Set(pokemons.map(i => i.type))];
    const buttonList = allTypes.map(i => <Buttons key={i} className='type-btn' onClick={changeType}>{i}</Buttons>);

    return (
      <main className='main'>
        <div className='pokedex'>
          <Pokemon className={'type-btn'} pokemon={filteredPoke[pokeIndex]} />
        </div>
        <div>
          <Buttons className={'type-btn'} onClick={changeType}>All</Buttons>
          {buttonList}
        </div>
        <div>
          <Buttons className={'next-btn'} onClick={nextPoke} status={filteredPoke.length <= 1}>Next Pokemon!</Buttons>
        </div>
      </main>
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