import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import AllTodoList from './views/AllTodoList.vue'
import CompleteList from './views/CompleteList'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "allTodoList",
      component: AllTodoList
    },
    {
      path: "/complete",
      name: "completeList",
      component: CompleteList
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
