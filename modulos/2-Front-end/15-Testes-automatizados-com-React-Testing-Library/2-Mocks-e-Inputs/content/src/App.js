import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
    const data = await response.json();

    this.setState({ joke: data.joke });
  }

  render() {
    const { joke } = this.state;
    return (
      <div className="App">
        {joke}
      </div>
    );
  }
}

export default App;