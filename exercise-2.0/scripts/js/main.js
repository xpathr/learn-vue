var app = new Vue({
  el: '#exercise',
  data: {
    counter: 0,
    counter2: 0,
    counter3: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    increase2: function(step) {
      this.counter2 += step;
    },
    increase3: function(step, event) {
      // listen to both the custom argument and the default event
      this.counter3 += step;
    },
    updateCoordinates: function(event) {
      // the event object is created automatically
      this.x = event.clientX;
      this.y = event.clientY;
    },
    notUpdateCoordinates: function(event) {
      event.stopPropagation();
    },
    logMe: function(event) {
      console.log('You just pressed ENTER or SPACE.')
    }
  }
});
