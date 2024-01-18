import homeProductType from '@/domain/types/homeProductType';
import productCategoryEnum from '@/domain/enums/productCategoryEnum';
const homeProducts: homeProductType[] = [
    {
        id: 2,
        type: 'Destaque',
        title: 'Nairo Series®',
        image: '/img/backpack-image-2.png',
        price: 680,
        category: productCategoryEnum.BACKPACK,
        description:
            'Esta mochila de destaque é feita com materiais de alta qualidade, oferecendo durabilidade e conforto. Perfeita para o uso diário.'
    },
    {
        id: 3,
        type: 'Novidade',
        title: 'Kensho Series®',
        image: '/img/backpack-image-3.png',
        price: 559,
        category: productCategoryEnum.BACKPACK,
        description:
            'Uma novidade em nossa linha de produtos, a mochila Kensho Series® combina estilo e funcionalidade, ideal para o viajante moderno.'
    },
    {
        id: 4,
        type: 'Feito a mão',
        title: 'Atarashi Series®',
        image: '/img/backpack-image-4.png',
        price: 480,
        category: productCategoryEnum.BACKPACK,
        description:
            'Esta mochila feita à mão oferece um toque de autenticidade e originalidade. Seu design único é perfeito para quem busca se destacar.'
    },
    {
        id: 5,
        type: 'Destaque',
        title: 'Kabuya Series®',
        image: '/img/backpack-image-9.png',
        price: 680,
        category: productCategoryEnum.BACKPACK,
        description:
            'Destaque em nossa coleção, a mochila Kabuya Series® é sinônimo de estilo e praticidade. Seu design versátil é perfeito para todas as ocasiões.'
    },
    {
        id: 6,
        type: 'Novidade',
        title: ' Kotoba Series®',
        image: '/img/backpack-image-11.png',
        price: 380,
        category: productCategoryEnum.BACKPACK,
        description:
            'A novidade Kotoba Series® é uma mochila compacta, mas espaçosa o suficiente para carregar todos os seus itens essenciais.'
    },
    {
        id: 7,
        type: 'Destaque',
        title: 'Oozeki Series®',
        image: '/img/backpack-image-12.png',
        price: 580,
        category: productCategoryEnum.BACKPACK,
        description:
            'Esta mochila de destaque é conhecida por sua robustez e durabilidade, tornando-a a escolha perfeita para aventuras ao ar livre.'
    },
    {
        id: 8,
        type: 'Novidade',
        title: 'Caneca de Cerâmica Rústica',
        image: '/img/mug-image-1.png',
        price: 72,
        category: productCategoryEnum.MUG,
        description:
            'Esta novidade é uma caneca de cerâmica com um design rústico, perfeita para desfrutar de sua bebida quente favorita.'
    },
    {
        id: 9,
        type: 'Destaque',
        title: 'Caneca The Grounds',
        image: '/img/mug-image-2.png',
        price: 72,
        category: productCategoryEnum.MUG,
        description:
            'Esta caneca de destaque apresenta um design elegante e moderno, tornando-a a adição perfeita para qualquer conjunto de louças.'
    },
    {
        id: 10,
        type: 'Destaque',
        title: 'Caneca Preto Fosco',
        image: '/img/mug-image-3.png',
        price: 55,
        category: productCategoryEnum.MUG,
        description:
            'Caneca Preto Fosco: Esta caneca de destaque tem um acabamento preto fosco sofisticado, ideal para servir suas bebidas quentes com estilo.'
    }
];

export default homeProducts;
