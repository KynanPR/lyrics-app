// Create array for pokemon
let pokemonList = [];

// Create array of pokemon types
let pokemonTypes = [
  'Fire',
  'Water',
  'Grass',
  'Poison',
];

// Create pokemon objects in pokemonList array
pokemonList.push(
  {
    name: 'Charmander',
    height: 0.7,
    types: [pokemonTypes[0]],
  }
);

pokemonList.push(
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: [pokemonTypes[2], pokemonTypes[3]],
  }
);

pokemonList.push(
  {
    name: 'Squirtle',
    height: 0.5,
    types: [pokemonTypes[1]],
  }
);

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

pokemonList.forEach(writePokemon);
