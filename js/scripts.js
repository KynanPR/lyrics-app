// Create array for pokemon
let pokemonList = [];

// Create pokemon objects in pokemonList array
pokemonList.push(
  {
    name: 'Charmander',
    height: 0.7,
    types: ['Fire'],
  }
);

pokemonList.push(
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['Grass', 'Poison'],
  }
);

pokemonList.push(
  {
    name: 'Squirtle',
    height: 0.5,
    types: ['Water'],
  }
);

// Loop through pokemonList writing name and height to DOM. Calls them cute if shorter than 0.5
for (let i = 0, writeText = '', heightComment = ''; i < pokemonList.length; i++) {
  // Simpler local vars
  let number = i + 1;
  let name = pokemonList[i].name;
  let height = pokemonList[i].height;
  let heightComment = '<i> - So small and cute!</i>';

  // Create text to write. Only add comment to end of height if <= 0.5
  if (height <= 0.5) { // Cuteness check
    document.write('<p><b>Pokemon ' + number + '\'s Name: </b>' + name + '<br><b>Pokemon ' + number + '\'s Height: </b>' + height + 'm' + heightComment + '</p>');
  } else {
    document.write('<p><b>Pokemon ' + number + '\'s Name: </b>' + name + '<br><b>Pokemon ' + number + '\'s Height: </b>' + height + 'm</p>');
  }

  // Write text to DOM
  document.write(writeText);
}
