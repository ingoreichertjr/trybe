import './App.css';
import pokemons from './data/Catalog'
import Header from './components/Header'
import Pokedex from './components/Pokedex.jsx';

function App() {
  return (
    <>
      <Header />
      <Pokedex pokemons={pokemons} />
    </>
  );
}

export default App;
