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

<template>
    <img
        :src="props.image"
        :class="cn('', props.class)"
    />
    <slot></slot>
</template>
