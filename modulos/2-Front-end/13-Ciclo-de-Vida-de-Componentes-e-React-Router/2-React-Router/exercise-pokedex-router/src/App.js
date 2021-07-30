import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import NavBar from './components/NavBar';
import About from './components/About';
import NotFound from './components/NotFound';
import PokemonDetails from './components/PokemonDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  UpdateFav(evt, id) {

  }

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Pokedex pokemons={pokemons} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/pokemon/:id">
              {(props) => <PokemonDetails {...props} pokemons={pokemons} />}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
