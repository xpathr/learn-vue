var app = new Vue({
  el: '#exercise',
  data: {
    isRed: false,
    color: 'green',
    // save the class name as the value of a data property
  },
  computed: {
    demoClasses: function() {
      return {
        red: this.isRed,
        blue: !this.isRed
      }
    }
  }
});
