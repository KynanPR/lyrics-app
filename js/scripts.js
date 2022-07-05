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

  // Create function to add pokemon button item to DOM and display on page
  function addListItem(pokemon) {
    let name = pokemon.name;
    let writeList = document.querySelector('.main-list');
    let listItem = document.createElement('li');
    let listItemButton = document.createElement('button');

    listItemButton.innerText = name;
    listItemButton.classList.add('main-list__button');
    listItemButton.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
    listItem.appendChild(listItemButton);
    writeList.appendChild(listItem);
  }

  // Placeholder function. To show details of clicked pokemon
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Make above delcared functions the properties of pokemonRepository
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
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

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
