import React, { useState, useEffect } from 'react';
import './App.css';

const PokemonList = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [foundPokemon, setFoundPokemon] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const searchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();

      setFoundPokemon(data);

      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`);
      const speciesData = await speciesResponse.json();
      
      const englishDescription = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');
      setPokemonDescription(englishDescription ? englishDescription.flavor_text : 'Descripción no disponible');

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
            <div style={{backgroundColor: getTypeColor(foundPokemon.types)}} className="PokemonDetails">
              <h3>Detalles de {foundPokemon.name}</h3>
              <h4> Descripcion </h4>
              <p> {pokemonDescription}</p>
              <h4>Altura: {foundPokemon.height} cm</h4>
              <h4>Peso: {foundPokemon.weight} kg</h4>
              <h4>Tipos:</h4>
              <p>
                {foundPokemon.types.map((type, index) => (
                  <p key={index}>{type.type.name}</p>
                ))}
              </p>
               <div> 
                    <h4> Male Version </h4>
                    <img src={foundPokemon.sprites.front_default} alt={foundPokemon.name} className='Img' />
                    <h4> Female Version </h4>
                    {foundPokemon.sprites.front_female === null ? (
                        <img src={foundPokemon.sprites.front_default} alt={foundPokemon.name} className='Img' />
                      ) : (
                        <img src={foundPokemon.sprites.front_female} alt={foundPokemon.name} className='Img' />
                      )}
                    <h4>Shyni Version</h4>
                    <img src={foundPokemon.sprites.front_shiny} alt={foundPokemon.name} className='Img'/>
                    <h4> Movimientos</h4>
                    {foundPokemon.moves.map((move, index) => (
                    <p key={index}>{move.move.name}</p>
                    ))}
               </div>
              <button onClick={toggleDetails}>Cerrar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PokemonList;