<template>
    <the-nav></the-nav>
    <router-view v-slot="{ Component }">
        <transition
            name="fade"
            mode="out-in"
        >
            <component :is="Component" />
        </transition>
    </router-view>
    <the-footer></the-footer>
</template>

<script setup lang="ts">
import TheNav from '@/primary/components/external-interfaces/TheNav.vue';
import TheFooter from '@/primary/components/external-interfaces/TheFooter.vue';
</script>

<style>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: all 0.5s linear;
}

.fade-leave-to {
    transition: all 0s lienar;
    opacity: 0;
}
</style>
