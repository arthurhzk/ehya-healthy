<template>
    <section>
        <img
            class="w-screen"
            src="/img/backpack-image.png"
            alt="Backpack"
        />
        <side-container>
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
        </side-container>
    </section>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH3 from '@/primary/components/typography/MyH3.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import brands from '@/domain/data/brands';
</script>
