import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import Home from "../views/Home.vue";
import JobDetails from "../views/JobDetails.vue";
import PostNewJob from "../views/PostNewJob.vue";
import CareerTips from "../views/CareerTips.vue";
import TrendingJobs from "../views/TrendingJobs.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import { authState } from "../auth/auth.ts";

const routes: Array<RouteRecordRaw> = [
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
    meta: { requiredAuth: "true" },
  },
  {
    path: "/career-tips",
    name: "CareerTips",
    component: CareerTips,
  },
  {
    path: "/trending-jobs",
    name: "TrendingJobs",
    component: TrendingJobs,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    if (to.meta.requiredAuth && !authState.isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
);

export default router;
