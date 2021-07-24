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
      pokeType: props.pokemons,
      nextBtn: false,
    }

    this.functions.changePokemon = this.functions.changePokemon.bind(this);
    this.functions.changeType = this.functions.changeType.bind(this);
  }

  functions = {
    changePokemon() {
      const { pokeIndex, pokeType } = this.state;
      if (pokeIndex === pokeType.length - 1) {
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
        this.setState({pokeType: pokemons, pokeIndex: 0, nextBtn: false})
      } else if (filtered.length === 1) {
        this.setState({pokeType: pokemons.filter(i => i.type === type), pokeIndex: 0, nextBtn: true})
      } else {
        this.setState({pokeType: pokemons.filter(i => i.type === type), pokeIndex: 0, nextBtn: false})
      }
    },
  }

  render() {
    const { pokeIndex, pokeType, nextBtn } = this.state

    return (
      <>
        <div className='pokedex'>
          <Pokemon pokemon={pokeType[pokeIndex]} />
        </div>
        <Buttons {...this.functions} pokemons={this.props.pokemons} nextBtn={nextBtn}/>
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