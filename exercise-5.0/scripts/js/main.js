var exercise1Data = {
  heading: 'Heading, 1st Vue Instance',
  paragraph: 'Paragraph, 1st Vue instance.',
  paragraphIsVisible: false,
}
// initialize the data properties of the Vue instance "exercise1" through vanilla Javascript

var exercise1 = new Vue({
  data: exercise1Data,
  methods: {
    show: function() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
      this.updateHeading('Heading, 1st Vue Instance, Paragraph is Visible');

      console.log(this.$refs.myButton);
      // use "this.$refs.name" to access the element referred to in the template
      this.$refs.myButton.innerText = 'Show Paragraph, Changed Through a Reference and Vanilla Javascript';
      // change the element text through vanilla Javascript
    },
    updateHeading: function(heading) {
      this.heading = heading;
    }
  },
  watch: {
    heading: function(value) {
      alert('The heading changed to “' + value + '”.');
    }
  }
});
// the Vue istance does not refer to any root DOM element (it is not declared)

exercise1.$mount('#exercise-1');
// the Vue instance is mounted on a declared root DOM element
// the same as writing "el: '#exercise-1'," in the Vue instance

setTimeout(function() {
  exercise1.heading = 'Heading, 1st Vue Instance, Changed Through Vanilla Javascript'
}, 2000);
// change the heading of the 1st Vue instance through vanilla Javascript

var exercise2 = new Vue({
  el: '#exercise-2',
  data: {
    heading: 'Heading, 2nd Vue Instance'
  },
  methods: {
    change: function() {
      exercise1.heading = 'Heading, 1st Vue Instance, Changed From 2nd Vue Instance';
      // change the heading of the 1st Vue instance from another Vue instance
    }
  }
});

var exercise3 = new Vue({
  template: '<h1>Heading, 3rd Vue Instance</h1>'
});

exercise3.$mount('#exercise-3');

//exercise3.$mount();
// the Vue instance is mounted
//document.getElementById('exercise-3').appendChild(exercise3.$el);
// the root DOM element of the Vue instance is declared using vanilla Javascript

exercise1.$refs.myHeading.innerText = 'Heading, 1st Vue Istance, Changed Through a Reference and Vanilla Javascript';
// changes done through references and vanilla Javascript are not reactive
