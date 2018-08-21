var app = new Vue({
  // create a new Vue instance
  el: '#app',
  data: {
    // create a new data property
    message: 'Hello World!',
  },
  methods: {
    // create a new methods function
    inputMessage: function(event) {
      // event is the default event object created by Javascript
      this.message = event.target.value;
      // use "this" to access all the properties stored in data and all the functions stored in methods in this Vue instance
      // event has a target property which has a value property
    },
  }
});
