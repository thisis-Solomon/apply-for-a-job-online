import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import JobDetails from "../views/JobDetails.vue";
import PostNewJob from "../views/PostNewJob.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/job/:id",
    name: "JobDetails",
    component: JobDetails,
  },
  {
    path: "/add-new-job",
    name: "PostNewJob",
    component: PostNewJob,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
