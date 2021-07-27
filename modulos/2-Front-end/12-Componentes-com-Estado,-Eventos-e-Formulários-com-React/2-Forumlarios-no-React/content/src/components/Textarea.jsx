import React, { Component } from 'react';

class Textarea extends Component {
  render() {
    const { value, onChange } = this.props

    return (
      <>
        <textarea name="textarea" id="textarea" cols="30" rows="10" value={value} onChange={onChange}></textarea>
      </>
    );
  }
}
 
export default Textarea;