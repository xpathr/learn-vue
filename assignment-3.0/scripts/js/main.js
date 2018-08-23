var app = new Vue({
  el: '#exercise',
  data: {
    value: 0,
    threshold: 36,
    timer: 5000,
  },
  computed: {
    result: function() {
      console.log('Result updated to ' + this.value);
      return this.value < 1 ? '' : this.value < 2 ? 'Just ' + this.value + '  jump, uh?' : this.value < 36 ? 'Just ' + this.value + ' jumps in a row, uh?' : this.value == 36 ? 'Wow! ' + this.value + ' jumps in a row!' : 'Wow! More than ' + this.value + ' jumps in a row!';
    }
  },
  watch: {
    result: function() {
      var vm = this;
      if (vm.value == vm.threshold) {
        setTimeout(function() {
          console.log('Result resetted.');
          vm.value = 0;
        }, vm.timer);
      }
    }
  }
});
