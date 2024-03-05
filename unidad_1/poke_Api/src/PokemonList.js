import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const getPokemonDetails = async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          if (!detailsResponse.ok) throw new Error(`HTTP error! Status: ${detailsResponse.status}`);
          const detailsData = await detailsResponse.json();

          const speciesResponse = await fetch(detailsData.species.url);
          if (!speciesResponse.ok) throw new Error(`HTTP error! Status: ${speciesResponse.status}`);
          const speciesData = await speciesResponse.json();
          const englishDescription = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === 'en'
          ).flavor_text;

          return {
            name: detailsData.name,
            image: detailsData.sprites.front_default,
            description: englishDescription,
            type: detailsData.types.map((type) => type.type.name).join(', '),
          };
        };

        const pokemonDetailsPromises = data.results.map(getPokemonDetails);
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getTypeColor = (types) => {
    const typeArray = types.split(', ');
    // Tomamos el color del primer tipo (puedes ajustar esto según tus preferencias)
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

  return (
    <div className='AppHeaderEnd'>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} style={{ backgroundColor: getTypeColor(pokemon.type) }}>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt={pokemon.name} className='Img' />
          <p>Type: {pokemon.type}</p>
          <p>{pokemon.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;