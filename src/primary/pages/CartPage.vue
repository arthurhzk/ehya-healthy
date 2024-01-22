<template>
    <section>
        <side-container>
            <div
                class="p-4 hidden md:block w-[352px] flex-col items-center bg-slate-50 absolute left-[60%]"
            >
                <my-h2 class="text-center pb-7">RESUMO DO PEDIDO</my-h2>

                <div class="space-y-3">
                    <div class="flex justify-between">
                        <my-p v-show="cartCondition">Subtotal</my-p>
                        <my-p v-show="cartCondition"
                            >R$: {{ store.totalCartItems.toFixed(2) }}</my-p
                        >
                    </div>
                    <div
                        v-if="store.totalCartItems < 900"
                        class="flex justify-between"
                    >
                        <my-p v-show="cartCondition">Entrega</my-p>
                        <my-p v-show="cartCondition"
                            >R$: {{ shippingTax }}</my-p
                        >
                    </div>
                    <div class="flex justify-between">
                        <my-p
                            v-show="cartCondition"
                            class="font-bold"
                            >Total</my-p
                        >
                        <my-p v-show="cartCondition"
                            >R$: {{ totalWithShipping.toFixed(2) }}</my-p
                        >
                    </div>
                    <div class="flex mt-8">
                        <div class="flex items-center">
                            <ph-envelope-simple :size="24" />
                            <Input
                                class="md:border-none"
                                type="text"
                                placeholder="Adicione um cupom"
                            />
                        </div>
                        <Button
                            class="hidden md:block"
                            variant="secondary"
                            >Adicionar</Button
                        >
                    </div>
                    <div class="flex items-center justify-center">
                        <Button
                            @click="redirect"
                            class="mt-6 w-full bg-green-500"
                            >FINALIZAR COMPRA</Button
                        >
                    </div>
                </div>
            </div>
            <my-h2>SEU CARRINHO</my-h2>
            <my-p>{{ totalProducts }}</my-p>

            <div v-for="product in store.purchasedItems">
                <cart-card
                    :product="product"
                    class="mt-6"
                    @delete="store.removeFromCart(product)"
                ></cart-card>
            </div>

            <div class="flex mt-8">
                <div class="flex justify-center items-center ml-10">
                    <ph-envelope-simple
                        class="md:hidden"
                        :size="24"
                    />
                    <Input
                        class="border-none md:hidden"
                        type="text"
                        placeholder="Adicione um cupom"
                    />
                </div>
                <Button
                    class="md:hidden"
                    variant="secondary"
                    >Adicionar</Button
                >
            </div>
            <div class="space-y-3 md:hidden">
                <div
                    v-if="store.totalCartItems < 900"
                    class="flex justify-between"
                >
                    <my-p v-show="cartCondition">Subtotal</my-p>
                    <my-p v-show="cartCondition"
                        >R$: {{ store.totalCartItems.toFixed(2) }}</my-p
                    >
                </div>
                <div class="flex justify-between">
                    <my-p v-show="cartCondition">Entrega</my-p>
                    <my-p v-show="cartCondition">{{ shippingTax }}</my-p>
                </div>
            </div>
            <div class="flex justify-between md:hidden">
                <my-p
                    v-show="cartCondition"
                    class="font-bold"
                    >Total</my-p
                >
                <my-p v-show="cartCondition"
                    >R$: {{ totalWithShipping.toFixed(2) }}</my-p
                >
            </div>

            <Button
                @click="redirect"
                class="w-full md:hidden bg-green-500 mt-6"
                >FINALIZAR COMPRA</Button
            >
        </side-container>
    </section>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import CartCard from '@/primary/components/layouts/CartCard.vue';
import Input from '@/primary/components/ui/input/Input.vue';
import Button from '@/primary/components/ui/button/Button.vue';
import { useCartStore } from '@/primary/infrastructure/store/cart';
import { PhEnvelopeSimple } from '@phosphor-icons/vue';
import { loadStripe } from '@stripe/stripe-js';
import { computed, onMounted } from 'vue';

const store = useCartStore();

const totalWithShipping = computed(() => {
    if (store.totalCartItems < 900) {
        return store.totalCartItems + 40;
    } else {
        return store.totalCartItems;
    }
});

const stripe = computed(async () => {
    const response = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
    return response;
});
onMounted(() => {
    console.log(stripe.value);
});

const totalProducts = computed(() => {
    if (store.purchasedItems.length > 0) {
        return `Total (${store.purchasedItems.length} ${store.purchasedItems.length === 1 ? 'produto' : 'produtos'} R$${store.totalCartItems.toFixed(
            2
        )})`;
    } else {
        return 'Carrinho está vazio!';
    }
});

const shippingTax = computed(() => {
    if (store.totalCartItems < 900) {
        return 'R$' + 40;
    } else {
        return 'Frete Grátis!';
    }
});

const cartCondition = computed(() => {
    return store.totalCartItems > 0;
});

const redirect = async () => {
    const stripeInstance = await stripe.value;
    if (stripeInstance) {
        stripeInstance.redirectToCheckout({
            successUrl: 'http://localhost:3000/success',
            cancelUrl: 'http://localhost:3000/cancel',
            lineItems: [
                {
                    price: 'price_1Oal16EOa67N3NLEw22bnSia',
                    quantity: 1
                }
            ],
            mode: 'payment'
        });
    } else {
        console.error('Stripe has not been properly initialized.');
    }
    return { redirect };
};
</script>
