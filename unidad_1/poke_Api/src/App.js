
import './App.css';
import PokemonList from './PokemonList';


function App() {
  return (
    <div className="App">
      

      <header className="AppHeader">
        <h1 className="title">
          Pokedex Kanto 
        </h1>
      </header>

      <header className='AppHeaderDiv'>
      <PokemonList />
      </header>
     
    </div>
  );
}

export default App;
