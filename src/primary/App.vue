<template>
    <router-view v-slot="{ Component }">
        <transition
            name="fade"
            mode="out-in"
        >
            <div><component :is="Component" /></div>
        </transition>
    </router-view>

    <Toaster />
</template>

<script setup lang="ts">
import { Toaster } from '@/primary/components/ui/sonner';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
