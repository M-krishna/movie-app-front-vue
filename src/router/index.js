import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () => import('../views/SingleMovie'),
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login')
  },
  {
    path: "/app/dashboard",
    name: "Dashboard",
    component: () => import('../views/Dashboard'),
    beforeEnter: isAuthenticated,
    children: [
      {
        path: "",
        name: "Dashboard",
        redirect: { name: "Movies" }
      },
      {
        path: "/app/dashboard/movies",
        name: "Movies",
        component: () => import('../views/DashboardMovies'),
        children: [
          {
            path: "/app/dashboard/movie/:movieId",
            name: "MovieDetail",
            component: () => import('../views/MovieDetail'),
            props: true
          }
        ]
      }
    ]
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
