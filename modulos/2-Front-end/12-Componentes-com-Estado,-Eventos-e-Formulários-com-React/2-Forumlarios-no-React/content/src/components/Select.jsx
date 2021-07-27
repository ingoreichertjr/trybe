import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { value, onChange } = this.props

    return (
      <select name="select" id="select" value={value} onChange={onChange}>
        <option value="Opt1">Option 1</option>
        <option value="Opt2">Option 2</option>
      </select>
    );
  }
}
 
export default Select;