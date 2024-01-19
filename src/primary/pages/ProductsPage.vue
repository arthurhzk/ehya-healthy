<template>
    <side-container>
        <div
            class="space-y-2 flex flex-col md:flex md:flex-row md:items-center md:justify-between"
        >
            <div>
                <ul class="md:flex md:justify-evenly md:gap-4">
                    <div v-for="product in productCategories">
                        <li
                            :class="
                                $route.path === product.type.toString()
                                    ? 'text-orange-500 font-semibold'
                                    : ''
                            "
                            @click="navigateToCategory(product.type.toString())"
                            class="uppercase flex items-center justify-center text-[#41414D] leading-6 hover:text-orange-500 hover:font-semibold cursor-pointer"
                        >
                            {{ product.path }}
                        </li>
                    </div>
                </ul>
            </div>

            <Input
                v-model:model-value="search"
                class="md:w-1/4"
                placeholder="Pesquise aqui.."
            />
        </div>
        <div
            class="flex mt-4 flex-col items-center justify-center p-2 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3"
        >
            <div v-for="product in fetchAllProducts">
                <router-link :to="`/${product.id}`">
                    <product-card
                        class="observe"
                        :product="product"
                    ></product-card
                ></router-link>
            </div>
        </div>
    </side-container>
</template>

<script lang="ts" setup>
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import ProductCard from '@/primary/components/layouts/ProductCard.vue';
import Input from '@/primary/components/ui/input/Input.vue';
import productCategories from '@/domain/data/productCategories';
import { useProducts } from '@/primary/infrastructure/composables/useProducts';
const { fetchAllProducts, search, navigateToCategory } = useProducts();
import { onMounted } from 'vue';
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const elementsToWatch = document.querySelectorAll('.observe');
    elementsToWatch.forEach((element) => {
        observer.observe(element);
    });
});
</script>
<style scoped>
.observe {
    opacity: 0;
    transform: scale(0.9);
    transition:
        opacity 1s,
        transform 1s;
}

.observe.visible {
    opacity: 1;
    transform: scale(1);
}
</style>
