var app = new Vue({
  el: '#exercise',
  data: {
    message: 'Hello',
  },
  methods: {
    consoleLog: function() {
      console.log(this.message);
    }
  }
});
