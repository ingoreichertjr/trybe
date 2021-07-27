import React, { Component } from 'react';

class Estados extends Component {
  state = {

  }
  render() {
    const states = ['AC', 'AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const statesList = states.map(i => <option key={i} value={i}>{i}</option>)

    return (
      statesList
    );
  }
}
 
export default Estados;