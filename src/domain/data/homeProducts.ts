import homeProductType from '@/domain/types/homeProductType';
import productCategoryEnum from '@/domain/enums/productCategoryEnum';
const homeProducts: homeProductType[] = [
    {
        id: 2,
        type: 'Destaque',
        title: 'Nairo Series®',
        image: '/img/backpack-image-2.png',
        price: 680,
        category: productCategoryEnum.BACKPACK
    },
    {
        id: 3,
        type: 'Novidade',
        title: 'Kensho Series®',
        image: '/img/backpack-image-3.png',
        price: 559,
        category: productCategoryEnum.BACKPACK
    },
    {
        id: 4,
        type: 'Feito a mão',
        title: 'Atarashi Series®',
        image: '/img/backpack-image-4.png',
        price: 480,
        category: productCategoryEnum.BACKPACK
    },
    {
        id: 5,
        type: 'Destaque',
        title: 'Kabuya Series®',
        image: '/img/backpack-image-9.png',
        price: 680,
        category: productCategoryEnum.BACKPACK
    },
    {
        id: 6,
        type: 'Novidade',
        title: ' Kotoba Series®',
        image: '/img/backpack-image-11.png',
        price: 380,
        category: productCategoryEnum.BACKPACK
    },
    {
        id: 7,
        type: 'Destaque',
        title: 'Oozeki Series®',
        image: '/img/backpack-image-12.png',
        price: 580,
        category: productCategoryEnum.BACKPACK
    },
    {
        id: 8,
        type: 'Novidade',
        title: 'Caneca de Cerâmica Rústica',
        image: '/img/mug-image-1.png',
        price: 72,
        category: productCategoryEnum.MUG
    },
    {
        id: 9,
        type: 'Destaque',
        title: 'Caneca The Grounds',
        image: '/img/mug-image-2.png',
        price: 72,
        category: productCategoryEnum.MUG
    },
    {
        id: 10,
        type: 'Destaque',
        title: 'Caneca Preto Fosco',
        image: '/img/mug-image-3.png',
        price: 55,
        category: productCategoryEnum.MUG
    }
];

export default homeProducts;
