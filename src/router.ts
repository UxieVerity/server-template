import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

const Login = () => import("./components/Login.vue");

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component:Login
    }
  ]
});
