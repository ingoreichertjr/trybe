import React, { Component } from 'react'

class List extends Component {
  render() {
    const items = this.props.items
    const listItems = items.map((i) => <li key={i.tarefa}>{i.tarefa}</li>);
    console.log(listItems);
    return <ol>{listItems}</ol>
  }
}

// const List = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

export default List