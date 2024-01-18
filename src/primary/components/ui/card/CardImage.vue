<template>
    <div
        class="md:flex md:items-center md:justify-center"
        :class="cn('relative', props.class)"
    >
        <img
            :src="props.image"
            class="md:w-[50%] max-h-[740px] object-cover]"
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
