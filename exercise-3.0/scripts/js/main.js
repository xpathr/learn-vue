var app = new Vue({
  el: '#exercise',
  data: {
    isRed: false,
  },
  computed: {
    myClass: function() {
      // class defined as a computer property because it depends on/listens to the state of "isRed"
      return {
        red: this.isRed,
        blue: !this.isRed
      };
    }
  }
});
