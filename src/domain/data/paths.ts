import pathTypes from '@/domain/types/pathTypes';

const paths: pathTypes[] = [
    {
        name: 'Home',
        pathName: '/'
    },
    {
        name: 'Produtos',
        pathName: '/products'
    },

    {
        name: 'Sobre',
        pathName: '/about'
    },
    {
        name: 'Contato',
        pathName: '/contact'
    },
    {
        name: `Carrinho`,
        pathName: '/cart'
    },
    {
        name: "Registrar",
        pathName: "/register"
    }
];

export default paths;
