import React, { Component } from 'react';

class About extends Component {
  render() { 
    return (
      <div>
        <h2>What is a Pokedex?</h2>
        <p>The Pokédex is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.</p>
        <img src="https://i.pinimg.com/originals/72/54/c4/7254c46486cd6d46ce44304b7804cc50.png" alt="Pokedex" />
      </div>
    );
  }
}
 
export default About;