import React, { Component } from 'react'

class List extends Component {
  render() {
    const items = this.props.items
    const task = () => {
      const listItems = items.map((i) => <li>{i}</li>);
      console.log(listItems);
          return (
            <ol>{listItems}</ol>
          );
    }

    return task()
  }
}

// const List = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

export default List