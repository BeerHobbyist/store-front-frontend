import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import AdminView from "@/views/AdminView.vue";
import AppBar from "@/components/AppBar.vue";
import AdminAppbar from "@/components/AdminAppbar.vue";

const routes = [
  {
    path: "/",
    components: {
      default: HomeView,
      appbar: AppBar,
    },
  },
  {
    path: "/cart",
    components: {
      default: CartView,
      appbar: AppBar,
    },
  },
  {
    path: "/checkout",
    components: {
      default: CheckoutView,
      appbar: AppBar,
    },
  },
  {
    path: "/admin",
    components: {
      default: AdminView,
      appbar: AdminAppbar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes,
});

export default router;
