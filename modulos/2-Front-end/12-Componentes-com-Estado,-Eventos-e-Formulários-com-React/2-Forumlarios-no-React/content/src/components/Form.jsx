import React, { Component } from 'react';
import Select from './Select'
import Textarea from './Textarea'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: '',
      textarea: '',
      checkbox: false,
      error: false,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({[name]: value})

    value.length > 120 ? this.setState({error: true}) : this.setState({error: false})
  }

  handleFile = () => {
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    )
  }

  render() {
    return (
      <form>
        <fieldset>
          <Select value={this.state.select} onChange={this.handleChange}/>
          <Textarea value={this.state.textarea} onChange={this.handleChange}/>
        </fieldset>
        <input type="checkbox" name="checkbox" id="checkbox" onChange={this.handleChange}/>
        <input type="file" ref={this.fileInput} onChange={this.handleFile}/>
      </form>
    );
  }
}
 
export default Form;