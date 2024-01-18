import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const HomePage = () => import('@/primary/pages/HomePage.vue');
const ProductPage = () => import('@/primary/pages/ProductsPage.vue');

const ProductCategoryPage = () =>
    import('@/primary/pages/ProductCategoryPage.vue');
const ProductDetailPage = () => import('@/primary/pages/ProductDetailPage.vue');

export enum RootPage {
    home = 'HOME_PAGE',
    product = 'PRODUCT_PAGE',
    productCategory = 'PRODUCT_TYPE_CATEGORY',
    productDetail = 'PRODUCT_DETAIL_PAGE'
}

export const routes: RouteRecordRaw[] = [
    {
        component: HomePage,
        name: RootPage.home,
        path: '/'
    },
    {
        component: ProductPage,
        name: RootPage.product,
        path: '/products'
    },
    {
        component: ProductCategoryPage,
        name: RootPage.productCategory,
        path: '/products/:category'
    },
    {
        component: ProductDetailPage,
        name: RootPage.productDetail,
        path: '/:id'
    }
];

const router = createRouter({ routes, history: createWebHashHistory() });

export default router;
