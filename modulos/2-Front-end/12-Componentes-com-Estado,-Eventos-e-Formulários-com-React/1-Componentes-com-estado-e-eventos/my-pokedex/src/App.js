import './App.css';
import pokemons from './data/Catalog'
import Pokedex from './components/Pokedex.jsx';

function App() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main className='main'>
        <Pokedex pokemons={pokemons} />
      </main>
    </>
  );
}

export default App;
