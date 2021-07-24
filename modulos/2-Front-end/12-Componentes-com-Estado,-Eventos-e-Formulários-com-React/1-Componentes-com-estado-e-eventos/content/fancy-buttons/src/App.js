import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.checkColor = this.checkColor.bind(this);

    this.state = {
      button1Clicks: 0,
      button2Clicks: 0,
      button3Clicks: 0,
    };
  }

  handleClick(button) {
    this.setState(
      (prevState) => ({ [button]: prevState[button] + 1 }),
      () => {
        console.log(this.checkColor(button));
      }
    )
  }

  checkColor(button) {
    return this.state[button] % 2 === 0 ? 'green' : 'red';
  }

  render() {
    return (
      <>
        <button 
          onClick={() => this.handleClick('button1Clicks')}
          style={{backgroundColor: this.checkColor('button1Clicks')}}>
          You clicked this button {this.state.button1Clicks} times
        </button>
        <button 
          onClick={() => this.handleClick('button2Clicks')}
          style={{backgroundColor: this.checkColor('button2Clicks')}}>
          You clicked this button {this.state.button2Clicks} times
        </button>
        <button 
          onClick={() => this.handleClick('button3Clicks')}
          style={{backgroundColor: this.checkColor('button3Clicks')}}>
          You clicked this button {this.state.button3Clicks} times
        </button>
      </>
    );
  }
}

export default App;
