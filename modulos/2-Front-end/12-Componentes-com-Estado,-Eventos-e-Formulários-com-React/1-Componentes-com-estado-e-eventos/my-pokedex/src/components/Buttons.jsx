import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { changeType, changePokemon, pokemons, status } = this.props
    const allTypes = [...new Set(pokemons.map(i => i.type))];
    const buttonList = allTypes.map(i => <button key={i} onClick={changeType}>{i}</button>);
    return (
      <>
        <div>
        <button onClick={changeType}>All</button>
          {buttonList}
        </div>
        <div>
          <button id='next' onClick={changePokemon} disabled={status}>Next Pokemon!</button>
        </div>
      </>
    );
  }
}
 
export default Buttons;