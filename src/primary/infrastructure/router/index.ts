import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const HomePage = () => import('@/primary/pages/HomePage.vue');
const ProductPage = () => import('@/primary/pages/ProductsPage.vue');
const ProductCategoryPage = () =>
    import('@/primary/pages/ProductCategoryPage.vue');
const ProductDetailPage = () => import('@/primary/pages/ProductDetailPage.vue');
const AboutPage = () => import('@/primary/pages/AboutPage.vue');
const CartPage = () => import('@/primary/pages/CartPage.vue');
const ContactPage = () => import('@/primary/pages/ContactPage.vue');
const RegisterPage = () => import('@/primary/pages/RegisterPage.vue');
const LoginPage = () => import('@/primary/pages/LoginPage.vue');
export enum RootPage {
    home = 'HOME_PAGE',
    product = 'PRODUCT_PAGE',
    productCategory = 'PRODUCT_TYPE_CATEGORY',
    productDetail = 'PRODUCT_DETAIL_PAGE',
    about = 'ABOUT_PAGE',
    cart = 'CART_PAGE',
    contact = 'CONTACT_PAGE',
    register = 'REGISTER_PAGE',
    login = 'LOGIN_PAGE'
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
    },
    {
        component: AboutPage,
        name: RootPage.about,
        path: '/about'
    },
    {
        component: CartPage,
        name: RootPage.cart,
        path: '/cart'
    },
    {
        component: ContactPage,
        name: RootPage.contact,
        path: '/contact'
    },
    {
        component: RegisterPage,
        name: RootPage.register,
        path: '/register'
    },
    {
        component: LoginPage,
        name: RootPage.login,
        path: '/login'
    }
];

const router = createRouter({ routes, history: createWebHashHistory() });

export default router;
