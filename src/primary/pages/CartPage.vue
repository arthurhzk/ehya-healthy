<template>
    <side-container>
        <my-h2>Meu Carrinho</my-h2>
        <div v-for="product in store.purchasedItems">
            <cart-card
                :product="product"
                class="mt-6"
            ></cart-card>
        </div>
        <div class="flex mt-8">
            <Input placeholder="Adicione um cupom" />
            <Button variant="secondary">Adicionar</Button>
        </div>
        <Button class="w-full bg-blue-600 mt-6">FINALIZAR COMPRA</Button>
    </side-container>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import CartCard from '@/primary/components/layouts/CartCard.vue';
import Input from '@/primary/components/ui/input/Input.vue';
import Button from '@/primary/components/ui/button/Button.vue';
import { useCartStore } from '@/primary/infrastructure/store/cart';
import { onMounted } from 'vue';
const store = useCartStore();
onMounted(() => {
    console.log(store.purchasedItems);
});
</script>
