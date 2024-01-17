<template>
    <section>
        <side-container>
            <product-carousel class="block md:hidden" />
            <div class="md:flex md:items-center md:gap-8">
                <img
                    class="hidden md:block lg:hidden"
                    src="/img/backpack-image-6.png"
                />
                <img
                    class="hidden lg:block p-4"
                    src="/img/backpack-image-5.png"
                    alt=""
                />
                <div class="md:flex md:flex-col">
                    <my-p>MOCHILAS</my-p>
                    <my-h3>Mochilas de couro de qualidade.</my-h3>
                    <my-p
                        >Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. voluptatum. non, nam facere eveniet! Unde?</my-p
                    >
                    <my-p class="font-semibold underline mt-4"
                        >Ver a nossa coleção</my-p
                    >
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div
                    class="grid grid-cols-2 mt-10 gap-10 items-center md:flex md:gap-[64px] md:p-10"
                >
                    <img
                        v-for="brand in brands"
                        :src="brand.logo"
                    />
                </div>
            </div>
            <div class="md:flex md:items-center md:justify-center md:space-y-4">
                <home-card
                    v-for="product in homeProducts"
                    :key="product.id"
                    :product="product"
                ></home-card>
            </div>
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
                class="mb-12 block md:hidden"
                title="Qualidade"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur."
                start="Saiba mais"
            />
            <BigDescriptionCard
                class="mb-12 hidden md:block"
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
import BigDescriptionCard from '@/primary/components/layouts/BigDescriptionCard.vue';
import ProductCarousel from '@/primary/components/layouts/ProductCarousel.vue';
</script>
