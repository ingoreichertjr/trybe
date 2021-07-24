import React, { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { changeType, changePokemon, pokemons, nextBtn } = this.props
    const allTypes = [...new Set(pokemons.map(i => i.type))];
    const buttonList = allTypes.map(i => <button key={i} onClick={changeType}>{i}</button>);
    return (
      <>
        <div>
        <button onClick={changeType}>All</button>
          {buttonList}
        </div>
        <div>
          <button id='next' onClick={changePokemon} disabled={nextBtn}>Next Pokemon!</button>
        </div>
      </>
    );
  }
}
 
export default Buttons;