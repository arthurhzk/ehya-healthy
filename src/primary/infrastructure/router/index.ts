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
    },
    {
        path: '/pills',
        name: 'Pills',
        component: () => import('@/primary/pages/PillsPage.vue')
    },
    {
        path: '/exercises',
        name: 'Exercises',
        component: () => import('@/primary/pages/ExercisesPage.vue')
    }
];

const router = createRouter({ routes, history: createWebHashHistory() });

export default router;
