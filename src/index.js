import App from "./App.vue";
import Vue from "vue";

import "regenerator-runtime/runtime";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

new Vue({
  el: "#root",
  render: (h) => h(App),
});
