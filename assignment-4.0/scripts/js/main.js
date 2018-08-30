var app = new Vue({
  el: '#exercise',
  data: {
    ex1Emphasis: true,
    ex1Class: '',
    ex1Timer: 500,
    ex3Class: 'red',
    ex4Class: 'green',
    ex4Shape: false,
    ex5StyleProperty: 'red',
    ex6Width: 20,
    ex6Timer: 100,
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        if (vm.ex1Emphasis == true) {
          vm.ex1Class = 'emphasis';
          console.log('Element emphasized.');
          vm.ex1Emphasis = false;
          console.log('Emphasis is: ' + vm.ex1Emphasis + '.');
        } else {
          vm.ex1Class = 'deemphasis';
          console.log('Element deemphasized.');
          vm.ex1Emphasis = true;
          console.log('Emphasis is: ' + vm.ex1Emphasis + '.');
        };
      }, this.ex1Timer);
    },
    startProgress: function() {
      var vm = this;
      setInterval(function() {
        vm.ex6Width = vm.ex6Width + 2;
        console.log('Width increased.');
      }, this.ex6Timer);
    }
  }
});
