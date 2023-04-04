import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Image from "../components/image.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/images",
    name: "images",
    component: Image,
  },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
