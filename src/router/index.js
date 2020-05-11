import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleMovie from '../views/SingleMovie.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movie/:movieId",
    name: "SingleMovie",
    component: SingleMovie,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
