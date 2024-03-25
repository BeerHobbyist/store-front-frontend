import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CartView from '@/views/CartView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;