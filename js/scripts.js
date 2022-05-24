// Create array for pokemon
let pokemonList = [];

// Create array of pokemon types
let pokemonTypes = [
  'Fire',
  'Water',
  'Grass',
  'Poison'
];

// Create pokemon objects in pokemonList array
pokemonList.push(
  {
  name: 'Charmander',
  height: 0.7,
  types: [pokemonTypes[0]]
  }
);

pokemonList.push(
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: [pokemonTypes[2], pokemonTypes[3]]
  }
);

pokemonList.push(
  {
    name: 'Squirtle',
    height: 0.5,
    types: [pokemonTypes[1]]
  }
);
