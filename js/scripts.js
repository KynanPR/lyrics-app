// Setup IIFE to protect pokemonList
// Create pokemonRepository object with properies of add & getAll functions
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    console.log('Before load details:', pokemon);
    loadDetails(pokemon).then(function() {
      console.log('After load details:', pokemon);
    });
  }

  // Fetch base pokemon list from API and add each one to pokemonList
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function(error) {
      console.error(error);
    });
  }

  // Fetch and load details of given pokemon object
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(error) {
      console.error(error);
    });
  }

  // Make above delcared functions the properties of pokemonRepository
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

// Fetch pokemon from API then add them to DOM
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function getCuteMessage(height) {
  return height <= 0.5 ? '<i> - So small and cute!</i>' : '';
}
