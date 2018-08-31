var app = new Vue({
  el: '#exercise',
  data: {
    ex1Classes: {
      emphasis: false,
      deemphasis: true,
    },
    ex1Timer: 500,
    ex3Class: 'red',
    ex4Class: 'green',
    ex4isRounded: true,
    ex5Styles: {
      'width': '200px',
      'height': '200px',
      'background-color': 'red',
    },
    ex6Styles: {
      'width': '0',
      'background-color': 'orange',
    },
    ex6Step: 2,
    ex6Timer: 20,
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.ex1Classes.emphasis = !vm.ex1Classes.emphasis;
        vm.ex1Classes.deemphasis = !vm.ex1Classes.deemphasis;
      }, this.ex1Timer);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + vm.ex6Step;
        vm.ex6Styles.width = width + 'px';
        console.log('Width increased to ' + vm.ex6Styles.width + '.');
      }, this.ex6Timer);
    }
  }
});
