<template>
    <side-container
        ><div class="flex justify-between">
            <my-h2>Clonify</my-h2>
            <div class="flex items-center gap-1">
                <box-icon :class="iconSize" />
                <div class="gap-4 flex items-center">
                    <home-icon :class="iconSize" />
                    <hamburger-menu-icon :class="iconSize" />
                </div>
            </div>
        </div>
    </side-container>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/containers/SideContainer.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import { computed } from 'vue';
import { HamburgerMenuIcon, HomeIcon, BoxIcon } from '@radix-icons/vue';
const iconSize = computed(() => 'w-6 h-6');
</script>
