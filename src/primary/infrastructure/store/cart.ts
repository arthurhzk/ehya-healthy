import { defineStore } from 'pinia';
import { ref } from 'vue';
import homeProductType from '@/domain/types/homeProductType';

export const useCartStore = defineStore('cart', () => {
    const purchasedItems = ref<homeProductType[]>([]);
    const quantity = ref<number>(0);
    const addToCart = (product: homeProductType) => {
        const findProductById = purchasedItems.value.find(
            (item) => item.id === product.id
        );
        if (!findProductById) {
            purchasedItems.value.push(product);
            quantity.value++;
        } else {
            quantity.value++;
        }
    };
    return { purchasedItems, addToCart };
});
