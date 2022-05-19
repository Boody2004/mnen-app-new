import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Map from "../views/Map.vue";
import ContactUs from "../views/ContactUs.vue";
import Inspired from "../views/Inspired.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/contactUs",
    name: "Contact Us",
    component: ContactUs,
  },
  {
    path: "/gitInspired",
    name: "Git Inspired",
    component: Inspired,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
