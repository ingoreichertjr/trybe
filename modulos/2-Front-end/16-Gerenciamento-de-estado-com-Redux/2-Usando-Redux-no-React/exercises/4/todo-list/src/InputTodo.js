import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './redux/actions';
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  handleAdd(value, callback) {
    callback(value);
    this.setState({ textTodo: '' })
  }

  render() {
    const { addTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => this.handleAdd(textTodo,addTodo)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(InputTodo);

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}