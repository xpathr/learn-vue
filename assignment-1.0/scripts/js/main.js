var app = new Vue({
  el: '#exercise',
  data: {
    name: 'Nagatobimaru',
    age: '2000',
    portrait: 'media/images/tora_00.jpg',
  },
  methods: {
    randomize: function() {
      return Math.random();
    }
  }
});
