// Create array of pokemon types
const pokemonTypes = [
  'Fire',
  'Water',
  'Grass',
  'Poison',
];

// Create template Pokemon object
const pokemonTemplate = {
  name: 'String', // name as string
  height: 1, // height as float
  types: ['Array', 'Of', 'Strings'], // types as an array of at strings - length >= 1
};

// Setup IIFE to protect pokemonList
// Create pokemonRepository object with properies of add & getAll functions
let pokemonRepository = (function() {
  let pokemonList = [];

  // Create function to add pokemon to pokemonList
  function add(pokemon) {
    // Validate argument. If valid add to pokemonList. If invalid show warning in console
    if (isObject(pokemon) && isValidPokemon(pokemon)) {
      pokemonList.push(pokemon);
    } else {
      console.warn('Invalid Pokemon object - Ensure all keys are present and correct');
    }
  }

  // Create function that returns pokemonList
  function getAll() {
    return pokemonList;
  }

  // console.log(pokemonList);

  // Make above delcared functions the properties of pokemonRepository
  return {
    add: add,
    getAll: getAll,
  };
})();

// Pokemon validation functions
// Check if object
function isObject(varValidating) {
  console.log(typeof varValidating);
  return (typeof varValidating === 'object' ? true : false);
}

// Check object keys are as expected
function isValidPokemon(validatingPokemon) {
  // Create arrays of each of the objects keys
  const templatePokemonKeys = Object.keys(pokemonTemplate);
  console.log(templatePokemonKeys);
  const validatingPokemonKeys = Object.keys(validatingPokemon);
  console.log(validatingPokemonKeys);

  validatingPokemonKeys == templatePokemonKeys ? console.log('True') : console.log('False');

  // Only checks for exact match of keys, so order matters - Possibly IMPROVE
  return (validatingPokemonKeys == templatePokemonKeys ? true : false);
}

pokemonRepository.add({
  name: 'Charmander',
  height: 0.7,
  types: [pokemonTypes[0]],
});

pokemonRepository.add({
  name: 'Bulbasaur',
  height: 0.7,
  types: [pokemonTypes[2], pokemonTypes[3]],
});

pokemonRepository.add({
  name: 'Squirtle',
  height: 0.5,
  types: [pokemonTypes[1]],
});

function getCuteMessage(height) {
  return height <= 0.5 ? '<i> - So small and cute!</i>' : '';
}

function writePokemon(pokemon, i) {
  // Simpler local vars
  let name = pokemon.name;
  let height = pokemon.height;
  let cuteMessage = getCuteMessage(height);

  writeText = `<p>
  <b>Pokemon ${i + 1}'s Name:</b> ${name}<br>
  <b>Pokemon ${i + 1}'s Height:</b> ${height}m${cuteMessage}
  </p>`;

  // Write text to DOM
  document.write(writeText);
}

pokemonRepository.getAll().forEach(writePokemon);
