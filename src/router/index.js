import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
// import ProjectArchiveView from "@/views/ProjectArchiveView.vue";

import { useScrollPositionStore } from "@/stores/scrollPosition";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "glenn wu",
      component: HomeView,
    },
    {
      path: "/archive",
      name: "archive | glenn wu",
      component: () => import("@/views/ProjectArchiveView.vue"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue")
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    const scrollPositionStore = useScrollPositionStore();
    if (savedPosition) {
      return savedPosition;
    } else {
      return scrollPositionStore.getPosition(to);
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next()
});

export default router;
