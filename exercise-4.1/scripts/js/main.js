var app = new Vue({
  el: '#exercise',
  data: {
    pokemon: ['Bulbasaur', 'Charmander', 'Squirtle'],
    myPokemon: [
      {name: 'Bulbasaur', weight: 6.9, type: 'Grass, Poison'},
      {name: 'Charmander', weight: 8.5, type: 'Fire'},
      {name: 'Squirtle', weight: 9, type: 'Water'}
    ]
  }
});
