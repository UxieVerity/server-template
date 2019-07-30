import Vue from "vue";
import * as $ from "jquery";
import router from "./router";
import store from "./store";
import App from "./App.vue";

require("./assets/css/bootstrap.css");
require("./assets/css/index.scss");
require("./assets/js/bootstrap.js");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
