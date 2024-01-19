<template>
    <side-container>
        <div
            class="space-y-3 flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center"
        >
            <img
                class="md:w-1/2 md:h-1/2 lg:h-1/2 lg:w-1/3"
                :src="searchProductById?.image"
                alt=""
            />
            <div
                class="md:flex-row md:space-y-6 md:justify-center md:items-center lg:absolute lg:left-[40%]"
            >
                <div class="space-y-8 flex flex-col items-center">
                    <my-h2 class="text-center">{{
                        searchProductById?.title
                    }}</my-h2>
                    <my-h3 class="text-center"
                        >R$ {{ searchProductById?.price.toFixed(2) }}</my-h3
                    >
                    <Button class="block md:hidden w-full md:1/2"
                        >Comprar</Button
                    >
<<<<<<< HEAD

                    <my-p class="hidden md:block lg:text-center"
                        >*Frete grátis para todo o Brasil em compras acima de R$
                        900.00.</my-p
                    >
                    <my-p class="hidden md:block lg:text-center">{{
=======
                    <my-p
                        >*Frete grátis para todo o Brasil em compras acima de R$
                        900.00.</my-p
                    >

                    <my-p class="text-center">{{
>>>>>>> bb8686cded1c71799d9668b0fc1eea947d073171
                        searchProductById?.description
                    }}</my-p>
                </div>

                <div class="md:flex md:items-center md:justify-center">
                    <Button class="hidden md:block w-full lg:w-[80%] xl:w-[70%]"
                        >Adicionar ao Carrinho</Button
                    >
                </div>
            </div>
        </div>
        <Accordion
            type="single"
            collapsible
        >
            <AccordionItem
                class="block md:hidden"
                value="item-1"
            >
                <AccordionTrigger>Descrição do produto</AccordionTrigger>
                <AccordionContent>
                    {{ searchProductById?.description }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <Accordion
            type="single"
            collapsible
        >
            <AccordionItem
                class="block md:hidden"
                value="item-1"
            >
                <AccordionTrigger>Consulta de Frete</AccordionTrigger>
                <AccordionContent>
                    *Frete Grátis para compras acima de R$ 900,00
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </side-container>
</template>

<script setup lang="ts">
import { useProducts } from '@/primary/composables/useProducts';
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import MyH3 from '@/primary/components/typography/MyH3.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import Button from '@/primary/components/ui/button/Button.vue';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/primary/components/ui/accordion';
const { searchProductById } = useProducts();
</script>
