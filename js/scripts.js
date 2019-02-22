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

for (var i = 0; i < repository.length; i++) {

  document.write(repository[i].name + ' (height: ' + repository[i].height + 'm)');

  if (repository[i].height > 1.5) {
    document.write('<strong> - Wow, that\'s big!</strong> ');
  }

  document.write(' Type: ')

  for (var j = 0; j < repository[i].type.length; j++) {

    if (repository[i].type[j] === 'grass') {
      document.write('<span class="type-styles green">grass </span>');
    } else if (repository[i].type[j] === 'poison') {
      document.write('<span class="type-styles purple">poison </span>');
    } else if (repository[i].type[j] === 'fire') {
      document.write('<span class="type-styles red">fire </span>');
    } else if (repository[i].type[j] === 'water') {
      document.write('<span class="type-styles blue">water </span>');
    } else if (repository[i].type[j] === 'electric') {
      document.write('<span class="type-styles yellow">electric </span>');
    } else if (repository[i].type[j] === 'psychic') {
      document.write('<span class="type-styles violet">psychic </span>');
    }
  }
  document.write('<br>');
}
