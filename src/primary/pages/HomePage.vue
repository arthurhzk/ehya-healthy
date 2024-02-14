<template>
    <section>
        <div class="flex items-center justify-center"></div>
        <side-container>
            <div class="md:flex md:items-center md:gap-8">
                <img
                    class="block md:hidden"
                    src="/img/backpack-image-8.png"
                />
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
                    <my-p>Nossos produtos são todos feitos à mão.</my-p>
                    <router-link to="/products/backpack">
                        <my-p class="font-semibold underline mt-4"
                            >Ver a nossa coleção</my-p
                        ></router-link
                    >
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div
                    class="grid grid-cols-2 mt-10 gap-10 items-center lg:flex lg:flex-row"
                >
                    <img
                        v-for="brand in brands"
                        :src="brand.logo"
                    />
                </div>
            </div>
            <div class="md:flex md:items-center md:justify-center md:space-y-4">
                <home-card
                    class="observe"
                    v-for="product in sliceProductHomePage"
                    :key="product.id"
                    :product="product"
                ></home-card>
            </div>
            <my-p class="text-gray-500"
                >Aproveite agora os melhores descontos, corra que é por tempo
                ilimitado!
            </my-p>

            <DescriptionCard class="observe" />
            <NewsletterCard
                class="observe"
                title="Assine a Newsletter"
                description="Aproveite os ótimos descontos para assinantes"
                button-text="Assinar"
            ></NewsletterCard>
        </side-container>
    </section>
</template>

<script setup lang="ts">
import HomeCard from '@/primary/components/layouts/HomeCard.vue';
import homeProducts from '@/domain/data/homeProducts';
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH3 from '@/primary/components/typography/MyH3.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import brands from '@/domain/data/brands';
import { computed } from 'vue';
import NewsletterCard from '@/primary/components/layouts/NewsletterCard.vue';
import DescriptionCard from '@/primary/components/layouts/DescriptionCard.vue';
import { onMounted } from 'vue';
const sliceProductHomePage = computed(() => {
    return homeProducts.slice(0, 3);
});

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
