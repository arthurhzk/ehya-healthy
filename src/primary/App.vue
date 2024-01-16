<template>
    <the-nav></the-nav>
    <transition
        name="fade"
        mode="out-in"
    >
        <router-view></router-view>
    </transition>
</template>

<script setup lang="ts">
import TheNav from '@/primary/external-interfaces/TheNav.vue';
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
