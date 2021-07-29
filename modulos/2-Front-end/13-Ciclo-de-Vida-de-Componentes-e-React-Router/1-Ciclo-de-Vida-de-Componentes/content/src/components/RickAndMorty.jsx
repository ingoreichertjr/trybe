import React, { Component }from 'react';

class RickAndMorty extends Component {
  constructor(props){
    super(props);

    this.state = {
      characters: [],
    };
  }

  async componentDidMount () {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    this.setState({characters: data.results});
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="R&M">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default RickAndMorty;