<template>
    <RouterView />

    <Toaster />
</template>

<script setup lang="ts">
import Toaster from '@/primary/components/ui/toast/Toaster.vue';
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
