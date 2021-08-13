import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedTask: undefined
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
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
    const { listTodo, selectedTask } = this.state;
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
export default App;