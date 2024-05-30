import { createRouter, createWebHistory } from 'vue-router';
import WoHome from '../views/Home';
import WoSettings from '@/views/Settings';
import WoOrderBook from '@/views/OrderBook';

const routes = [
    {
        path: '/',
        name: 'home',
        component: WoHome,
        redirect: '/settings',
    },
    {
        path: '/settings',
        name: 'settings',
        component: WoSettings,
    },
    {
        path: '/orderBook',
        name: 'orderBook',
        component: WoOrderBook,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
