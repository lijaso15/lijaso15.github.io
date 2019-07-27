import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";
import Project from "./views/Project.vue";
import Featured from "./components/Featured.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "projects",
      component: Featured
    },
    {
      path: "/projects/:project_name/:id",
      name: "project",
      component: Project,
      props: true
    },
    {
      path: "*",
      component: NotFoundComponent
    }
  ]
});
