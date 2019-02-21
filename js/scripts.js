var repository = [
  {
    name: 'Bulbasaur',
    type: ['grass', 'poison'],
    height: 0.7
  },
  {
    name: 'Charmander',
    type: ['fire'],
    height: 0.6
  },
  {
    name: 'Squirtle',
    type: ['water'],
    height: 0.5
  },
  {
    name: 'Mewtwo',
    type: ['psychic'],
    height: 2
  },
  {
    name: 'Pikachu',
    type: ['electric'],
    height: 0.4
  }
];

for (i = 0; i < repository.length; i++) {
  document.write(repository[i].name + ' (height: ' + repository[i].height + 'm)');

  if (repository[i].height > 1.5) {
    document.write('<strong> - Wow, that\'s big!</strong> ');
  }

  if (repository[i].type[0] === 'grass') {
    document.write(' Type: ' + '<span class="green">grass</span><br>');
  } else if (repository[i].type[0] === 'poison') {
    document.write(' Type: ' + '<span class="purple">poison</span><br>');
  } else if (repository[i].type[0] === 'fire') {
    document.write(' Type: ' + '<span class="red">fire</span><br>');
  } else if (repository[i].type[0] === 'water') {
    document.write(' Type: ' + '<span class="blue">water</span><br>');
  } else if (repository[i].type[0] === 'electric') {
    document.write(' Type: ' + '<span class="yellow">electric</span><br>');
  } else if (repository[i].type[0] === 'psychic') {
    document.write(' Type: ' + '<span class="violet">psychic</span><br>');
  }
}

// for (i = 0; i < repository.length; i++) {
//     if (repository[i].type[0] === 'grass') {
//       document.write(' Type: ' + '<span class="green">grass</span><br>');
//     } else if (repository[i].type[0] === 'poison') {
//       document.write(' Type: ' + '<span class="purple">poison</span><br>');
//     } else if (repository[i].type[0] === 'fire') {
//       document.write(' Type: ' + '<span class="red">fire</span><br>');
//     } else if (repository[i].type[0] === 'water') {
//       document.write(' Type: ' + '<span class="blue">water</span><br>');
//     } else if (repository[i].type[0] === 'electric') {
//       document.write(' Type: ' + '<span class="yellow">electric</span><br>');
//     } else if (repository[i].type[0] === 'psychic') {
//       document.write(' Type: ' + '<span class="violet">psychic</span><br>');
//   }
// }
