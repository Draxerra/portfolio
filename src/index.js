import App from "./App.vue";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

import "regenerator-runtime/runtime";

Vue.use(VueScrollTo);

new Vue({
  el: "#root",
  render: (h) => h(App),
});
