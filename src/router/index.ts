import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView },
  { path: '/checkout', component: CheckoutView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;