import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';

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
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: 'https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png' }} style={{ width: 300, height: 100 }} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginRight: 10 }}
          placeholder="Pokemon"
          value={pokemonName}
          onChangeText={(text) => setPokemonName(text)}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
          onPress={searchPokemon}
        >
          <Text style={{ color: 'white' }}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {foundPokemon && (
        <View style={{ marginTop: 20 }}>
          <View style={{ backgroundColor: getTypeColor(foundPokemon.types), padding: 10, borderRadius: 5, alignItems: 'center' }}>
            <Text>{foundPokemon.name}</Text>
            <Image source={{ uri: foundPokemon.sprites.front_default }} style={{ width: 100, height: 100 }} />
            <TouchableOpacity style={{ backgroundColor: 'green', padding: 5, marginTop: 5, borderRadius: 5 }} onPress={toggleDetails}>
              <Text style={{ color: 'white' }}>Ver Más</Text>
            </TouchableOpacity>
          </View>

          {showDetails && (
            <View style={{ backgroundColor: getTypeColor(foundPokemon.types), padding: 10, borderRadius: 5, marginTop: 10 }}>
              <Text>Detalles de {foundPokemon.name}</Text>
              <Text>Descripción: {pokemonDescription}</Text>
              <Text>Altura: {foundPokemon.height} cm</Text>
              <Text>Peso: {foundPokemon.weight} kg</Text>
              <Text>Tipos:</Text>
              {foundPokemon.types.map((type, index) => (
                <Text key={index}>{type.type.name}</Text>
              ))}
              <Button title="Cerrar" onPress={toggleDetails} />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default PokemonList;