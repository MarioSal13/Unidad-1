import React, { useState, useEffect } from 'react';
import './App.css';

const PokemonList = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [foundPokemon, setFoundPokemon] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const searchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();

      setFoundPokemon(data);
    } catch (error) {
      console.error('Error al buscar el Pokémon:', error);
    }
  };

  const getTypeColor = (types) => {
    const typeArray = types.map(type => type.type.name);
    const primaryType = typeArray[0];
  
    switch (primaryType) {
      case 'normal':
        return 'lightgray';
      case 'fighting':
        return 'brown';
      case 'flying':
        return 'skyblue';
      case 'poison':
        return 'purple';
      case 'ground':
        return 'saddlebrown';
      case 'rock':
        return 'gray';
      case 'bug':
        return 'olive';
      case 'ghost':
        return 'darkslategray';
      case 'steel':
        return 'dimgray';
      case 'fire':
        return 'orangered';
      case 'water':
        return 'deepskyblue';
      case 'grass':
        return 'limegreen';
      case 'electric':
        return 'gold';
      case 'psychic':
        return 'magenta';
      case 'ice':
        return 'lightcyan';
      case 'dragon':
        return 'royalblue';
      case 'dark':
        return 'darkgray';
      case 'fairy':
        return 'pink';
        
      default:
        return 'gray';
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <h1 className="Title">
          <img src='https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png' alt="PokeAPI Logo" />
        </h1>
      </header>

      <div className='AppHeaderMid'>
        <input
          type="text"
          className="SerBar"
          placeholder="Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <input
          type="button"
          className="SerBarBut"
          value="Buscar"
          onClick={searchPokemon}
        />
      </div>

      {foundPokemon && (
        <div className="AppHeaderEnd">
          <div style={{backgroundColor: getTypeColor(foundPokemon.types)}} className='PokemonCard'>
            <h2>{foundPokemon.name}</h2>
            <img src={foundPokemon.sprites.front_default} alt={foundPokemon.name} className='Img' />
           
            <div>
              <input type='button' value='Ver Mas' className='MoreInfButton' onClick={toggleDetails}/>
            </div>
          </div>
          {showDetails && (
            <div className="PokemonDetails">
              <h3>Detalles de {foundPokemon.name}</h3>
              <p>Altura: {foundPokemon.height}</p>
              <p>Peso: {foundPokemon.weight}</p>
              <p>Tipos:</p>
              <ul>
                {foundPokemon.types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
              <button onClick={toggleDetails}>Cerrar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PokemonList;