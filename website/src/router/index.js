import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerOptions = [
  {
    path: "/about",
    component: "about",
  },
  {
    path: "/photography",
    component: "photography",
  },
  {
    path: "/contact",
    component: "contact",
  },
  {
    path: "/lessons",
    component: "lessons",
  },
  {
    path: "/videography",
    component: "videography",
  },
  {
    path: "/welcome",
    component: "welcome",
  },
  {
    path: "/studio",
    component: "studio",
  },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`),
  };
});

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;