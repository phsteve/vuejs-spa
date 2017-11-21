import Vue from "vue";

const app = new Vue({
  data: {
    hello: "ahoy matefoi"
  },
  template: '<div id="app">{{ hello }}</div>'

});

export { app };
