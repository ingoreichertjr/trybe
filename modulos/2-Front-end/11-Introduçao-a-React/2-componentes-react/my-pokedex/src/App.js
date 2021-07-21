import './App.css';
import pokemons from './data/Catalog'
import Pokedex from './components/Pokedex.jsx';

function App() {
  return (
    <main className='pokedex'>
      <Pokedex pokemons={pokemons} />
    </main>
  );
}

export default App;
