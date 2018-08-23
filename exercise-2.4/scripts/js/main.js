var app = new Vue({
  el: '#exercise',
  data: {
    link: 'https://www.wikipedia.org/',
  },
  methods: {
    changeLink: function() {
      this.link = 'https://www.wikiquote.org/';
    }
  }
});
