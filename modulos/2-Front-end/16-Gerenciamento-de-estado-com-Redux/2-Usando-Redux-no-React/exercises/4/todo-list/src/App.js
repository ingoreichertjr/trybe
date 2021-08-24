import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTodo from './InputTodo';
import Item from './Item';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTask: undefined
    };
  }

  handleSelect = ({ target }) => {
    if (target.nodeName === 'DIV') {
      this.setState({ selectedTask: target.parentElement })
    } else {
      this.setState({ selectedTask: target })
    }

  }

  removeTask = (taskToRemove) => {
    taskToRemove.remove()
    this.setState({ selectedTask: undefined })
  }

  render() {
    const { selectedTask } = this.state;
    const { listTodo } = this.props;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} onClick={ this.handleSelect }>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
        <button
          data-testid="id-remove"
          type="button"
          value="Remover"
          onClick={ () => this.removeTask(selectedTask) }
          disabled={ selectedTask === undefined }
        >
          Remover
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listTodo: state.listReducer,
});

export default connect(mapStateToProps, null)(App);
