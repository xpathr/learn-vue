var app = new Vue({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    alertMe: function() {
      alert('!!!');
    },
    saveValue: function() {
      this.value = event.target.value;
      console.log(value);
    }
  }
});
