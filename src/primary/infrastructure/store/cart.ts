import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
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

    const removeFromCart = (product: homeProductType) => {
        purchasedItems.value.splice(purchasedItems.value.indexOf(product), 1);
    };

    const totalCartItems = computed(() => {
        const totalItems = purchasedItems.value.reduce(
            (acc, item) => acc + item.price,
            0
        );
        return totalItems;
    });

    return { purchasedItems, addToCart, removeFromCart, totalCartItems };
});
