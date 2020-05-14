import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleMovie from "../views/SingleMovie.vue"
import Login from "../views/Login"
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter);

const isAuthenticated = (to, from, next) => {
  if(localStorage.getItem("userData")){
    return next()
  }
  next({
    name: "Login"
  })
}

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
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/app/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: isAuthenticated
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
