import productCategoryType from '@/domain/types/productCategoryType';

const productCategories: productCategoryType[] = [
    {
        type: '/products/all',
        path: 'Todos os Produtos'
    },
    {
        type: '/products/mugs',
        path: 'Canecas'
    }
];

export default productCategories;
