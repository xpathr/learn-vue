var app = new Vue({
  el: '#exercise',
  data: {
    stCounter: 0,
    ndCounter: 0,
    result: '',
  },
  computed: {
    // rely on computed to cash data properties and execute functions only when needed
    resultComputed: function() {
      console.log('Computed.')
      return this.stCounter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    stCounter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.stCounter = 0;
      }, 2000);
    }
  },
  methods: {
    resultMethod: function() {
      console.log('Method.')
      return this.stCounter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  }
});
