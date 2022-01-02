import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AddResult from "@/components/AddResult";
import { ROUTES } from "@/const";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.home,
    name: "Home",
    component: Home,
  },
  {
    path: ROUTES.addResult,
    name: "AddResult",
    component: AddResult,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
