
import './App.css';
import PokemonList from './PokemonList';


function App() {
  return (
    <div className="App">
      

      <header className="App_header">
        <h1 className="title">
          Pokedex Kanto 
        </h1>
      </header>

      <header>
      <PokemonList />
      </header>
     
    </div>
  );
}

export default App;
