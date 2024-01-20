<template>
    <fwb-navbar solid>
        <template #logo>
            <fwb-navbar-logo
                image-url="/img/backpack-logo.png"
                link="#"
            >
                Voyager Leather Goods co.
            </fwb-navbar-logo>
        </template>

        <template #default="{ isShowMenu }">
            <router-link to="/cart">
                <ph-shopping-cart
                    :size="23"
                    color="#575757"
                    class="cursor-pointer md:hidden"
                />

                <span
                    :class="cartLengthMobile.length === 0 ? 'hidden' : ''"
                    class="w-5 flex items-center justify-center h-5 rounded-full bold text-white bg-red-700 absolute top-4 right-6 md:hidden"
                    >{{ cartLengthMobile }}</span
                >
            </router-link>
            <fwb-navbar-collapse :is-show-menu="isShowMenu">
                <div v-for="path in paths">
                    <router-link
                        :to="path.pathName"
                        :class="{
                            'font-semibold text-orange-500':
                                $route.path === path.pathName
                        }"
                    >
                        <my-p
                            :class="
                                path.name === 'Carrinho'
                                    ? 'hidden md:block'
                                    : ''
                            "
                            class="text-center cursor-pointer border-b-2 border-gray-200 py-2 md:border-none hover:text-orange-500"
                        >
                            {{
                                path.name === 'Carrinho'
                                    ? `${path.name} ${cartLength}`
                                    : path.name
                            }}
                        </my-p>
                    </router-link>
                </div>
            </fwb-navbar-collapse>
        </template>
    </fwb-navbar>
</template>

<script lang="ts" setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLogo } from 'flowbite-vue';
import MyP from '@/primary/components/typography/MyP.vue';
import paths from '@/domain/data/paths';
import { PhShoppingCart } from '@phosphor-icons/vue';
import { useCartStore } from '@/primary/infrastructure/store/cart';
import { computed } from 'vue';
const store = useCartStore();

const cartLength = computed(() => {
    if (store.purchasedItems.length == 0 || undefined) {
        return '';
    } else {
        return ` (${store.purchasedItems.length}) `;
    }
});

const cartLengthMobile = computed(() => {
    if (store.purchasedItems.length == 0 || undefined) {
        return '';
    } else {
        return ` ${store.purchasedItems.length} `;
    }
});
</script>
