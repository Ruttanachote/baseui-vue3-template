import { createRouter, createWebHashHistory } from "vue-router";

import NProgress from "nprogress/nprogress.js";

// Main layouts
import LayoutBackend from "@/layouts/variations/Backend.vue";
import LayoutLanding from "@/layouts/variations/Landing.vue";

// Frontend: Landing
const Landing = () => import("@/views/starter/LandingView.vue");

// Backend: Dashboard
const Dashboard = () => import("@/views/starter/DashboardView.vue");
const Dashboard1 = () => import("@/views/dashboard/dashboard1.vue");
const Dashboard2 = () => import("@/views/dashboard/dashboard2.vue");


// Set all routes
const routes = [
  {
    path: "/",
    component: LayoutLanding,
    children: [
      {
        path: "",
        name: "landing",
        component: Landing,
      },
    ],
  },
  {
    path: "/backend",
    redirect: "/backend/dashboard",
    component: LayoutBackend,
    children: [
      {
        path: "dashboard",
        name: "backend-dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/backend",
    redirect: "/backend/dashboard1",
    component: LayoutBackend,
    children: [
      {
        path: "dashboard1",
        name: "backend-dashboard-1",
        component: Dashboard1,
      },
    ],
  },
  {
    path: "/backend",
    redirect: "/backend/dashboard2",
    component: LayoutBackend,
    children: [
      {
        path: "dashboard2",
        name: "backend-dashboard-2",
        component: Dashboard2,
      },
    ],
  },
];

// Create Router
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

// NProgress
/*eslint-disable no-unused-vars*/
NProgress.configure({ showSpinner: false });

router.beforeResolve((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});
/*eslint-enable no-unused-vars*/

export default router;
