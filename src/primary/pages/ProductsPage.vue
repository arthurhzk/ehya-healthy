<template>
    <side-container>
        <div
            class="space-y-2 flex flex-col md:flex md:flex-row md:items-center md:justify-between"
        >
            <div>
                <ul class="md:flex md:justify-evenly md:gap-4">
                    <div v-for="product in productCategories">
                        <li
                            @click="navigateToCategory(product.type.toString())"
                            class="uppercase flex items-center justify-center text-[#41414D] leading-6 hover:text-orange-500 hover:font-semibold cursor-pointer"
                        >
                            {{ product.path }}
                        </li>
                    </div>
                </ul>
            </div>

            <Input
                class="md:w-1/4"
                placeholder="Pesquise aqui.."
            />
        </div>
        <div
            class="flex mt-4 flex-col items-center justify-center p-2 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3"
        >
            <div v-for="product in homeProducts">
                <product-card :product="product"></product-card>
            </div>
        </div>
    </side-container>
</template>

<script lang="ts" setup>
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import ProductCard from '@/primary/components/layouts/ProductCard.vue';
import homeProducts from '@/domain/data/homeProducts';
import Input from '@/primary/components/ui/input/Input.vue';
import { useRouter } from 'vue-router';
import productCategories from '@/domain/data/productCategories';
const router = useRouter();

const navigateToCategory = (path: string) => {
    router.push(path);
};
</script>
