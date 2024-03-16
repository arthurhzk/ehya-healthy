<template>
    <TheNav
        v-if="route !== undefined && route.name !== 'Login'"
        class="hidden md:block"
    />
    <RouterView />

    <Toaster />
    <TheFooter v-if="route !== undefined && route.name !== 'Login'" />
</template>

<script setup lang="ts">
import Toaster from '@/primary/components/ui/toast/Toaster.vue';
import TheNav from '@/primary/components/interfaces/TheNav.vue';
import TheFooter from '@/primary/components/interfaces/TheFooter.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s linear;
}
</style>
