<template>
    <section>
        <side-container>
            <product-carousel />
            <my-p>MOCHILAS</my-p>
            <my-h3>Mochilas de couro de qualidade.</my-h3>
            <my-p
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                voluptatum. non, nam facere eveniet! Unde?</my-p
            >
            <my-p class="font-semibold underline mt-4"
                >Ver a nossa coleção</my-p
            >
            <div class="flex items-center justify-center">
                <div class="grid grid-cols-2 mt-10 gap-10 items-center">
                    <img
                        v-for="brand in brands"
                        :src="brand.logo"
                    />
                </div>
            </div>
            <home-card
                v-for="product in homeProducts"
                :key="product.id"
                :product="product"
            ></home-card>
            <my-p class="text-gray-500"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur.
            </my-p>
            <my-h2 class="text-center font-bold mt-6"
                >05d : 11h : 23m : 02s</my-h2
            >
            <Button
                class="my-8"
                variant="default"
                >Compre agora!</Button
            >
            <NewsletterCard
                title="Assine a Newsletter"
                description="Aproveite os ótimos descontos para assinantes"
                button-text="Assinar"
            ></NewsletterCard>
            <DescriptionCard
                class="mb-12"
                title="Qualidade"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur."
                start="Saiba mais"
            />
        </side-container>
    </section>
</template>

<script setup lang="ts">
import HomeCard from '@/primary/components/layouts/HomeCard.vue';
import homeProducts from '@/domain/data/homeProducts';
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import MyH3 from '@/primary/components/typography/MyH3.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import Button from '@/primary/components/ui/button/Button.vue';
import brands from '@/domain/data/brands';
import NewsletterCard from '@/primary/components/layouts/NewsletterCard.vue';
import DescriptionCard from '@/primary/components/layouts/DescriptionCard.vue';
import ProductCarousel from '@/primary/components/layouts/ProductCarousel.vue';
</script>
