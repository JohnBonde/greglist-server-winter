import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import CarDetails from "../views/CarDetails.vue";
// @ts-ignore
import Jobs from "../views/Jobs.vue";
// @ts-ignore
import JobDetails from "../views/JobDetails.vue";
// @ts-ignore
import Houses from "../views/Houses.vue";
// @ts-ignore
import HouseDetails from "../views/HouseDetails.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cars/:id",
    name: "carDetails",
    component: CarDetails
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: JobDetails
  },
  {
    path: "/houses",
    name: "houses",
    component: Houses
  },
  {
    path: "/houses/:id",
    name: "houseDetails",
    component: HouseDetails
  },
  {
    path: "*", //saftey net that returns bad routes back to the home
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
