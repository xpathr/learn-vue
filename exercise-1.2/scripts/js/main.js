var app = new Vue({
  // create a new Vue instance
  el: '#exercise',
  data: {
    // create new data
    message: 'Hello World!',
  },
  methods: {
    // create new methods
    writeMessage: function() {
      return 'Hello Moon!';
    },
    retrieveMessage: function() {
      this.message = 'Hello Space!';
      return this.message;
    }
  }
});
