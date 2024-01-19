import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import homeProducts from '@/domain/data/homeProducts';
export const useProducts = () => {
    const router = useRouter();
    const search = ref('');

    const fetchAllProducts = computed(() => {
        if (search.value.length < 2) {
            return homeProducts;
        } else {
            return homeProducts.filter((product) =>
                product.title.toLowerCase().includes(search.value.toLowerCase())
            );
        }
    });

    const searchProducts = computed(() => {
        if (search.value.length < 2) {
            return filterProducts(
                router.currentRoute.value.params.category.toString()
            );
        } else {
            return homeProducts.filter((product) =>
                product.title.toLowerCase().includes(search.value.toLowerCase())
            );
        }
    });

    const filterProducts = (category: string) => {
        return homeProducts.filter((product) => product.category === category);
    };
    const navigateToCategory = (path: string) => {
        router.push(path);
    };

    const searchProductById = computed(() => {
        const id = Number(router.currentRoute.value.params.id);
        const findProduct = homeProducts.find((product) => product.id === id);
        return findProduct;
    });

    return {
        fetchAllProducts,
        searchProducts,
        search,
        filterProducts,
        navigateToCategory,
        searchProductById
    };
};
