import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/primary/pages/HomePage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/primary/pages/LoginPage.vue')
    },
    {
        path: '/system',
        name: 'System',
        component: () => import('@/primary/pages/SystemPage.vue')
    }
];

const router = createRouter({ routes, history: createWebHashHistory() });

export default router;
