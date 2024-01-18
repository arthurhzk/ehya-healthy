import productCategoryType from '@/domain/types/productCategoryType';

const productCategories: productCategoryType[] = [
    {
        type: '/products',
        path: 'Todos os Produtos'
    },
    {
        type: '/products/backpack',
        path: 'Mochilas'
    },
    {
        type: '/products/mugs',
        path: 'Canecas'
    }
];

export default productCategories;
