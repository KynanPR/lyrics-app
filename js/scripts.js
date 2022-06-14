// Create array of Pokemon types
const pokemonTypes = [
  'Fire',
  'Water',
  'Grass',
  'Poison',
];

// Setup IIFE to protect pokemonList
// Create pokemonRepository object with properies of add & getAll functions
let pokemonRepository = (function() {
  let pokemonList = [];

  // Create function to add pokemon to pokemonList
  function add(pokemon) {
    pokemonList.push(pokemon);
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
