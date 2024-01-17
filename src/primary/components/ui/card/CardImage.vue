<template>
    <div :class="cn('relative', props.class)">
        <img
            :src="props.image"
            class="w-full"
        />
        <div class="absolute inset-0 flex items-center justify-center">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { cn } from '@/secondary/lib/utils';

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
});
</script>
