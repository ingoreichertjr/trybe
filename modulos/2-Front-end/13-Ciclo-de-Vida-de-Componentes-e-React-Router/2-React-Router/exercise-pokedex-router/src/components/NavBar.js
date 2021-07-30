import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="about">What is a Pokedex?</Link>
      </nav>
    );
  }
}
 
export default NavBar;