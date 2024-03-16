<template>
    <Card class="w-[262px]">
        <img
            class="w-screen object-cover"
            :src="props.image"
        />

        <CardContent class="mt-4 space-y-2">
            <CardDescription class="font-semibold">{{
                props.name
            }}</CardDescription>
            <CardDescription class="text-sm">{{
                props.description
            }}</CardDescription></CardContent
        >
    </Card>
</template>

<script setup lang="ts">
import {
    Card,
    CardDescription,
    CardContent
} from '@/primary/components/ui/card';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>
