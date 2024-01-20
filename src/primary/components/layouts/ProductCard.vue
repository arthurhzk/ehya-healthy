<template>
    <Card>
        <CardHeader>
            <CardImage :image="props.product?.image" />
            <CardTitle class="text-center">{{
                props.product?.title
            }}</CardTitle>
        </CardHeader>
        <CardContent class="font-semibold text-center"
            >R$ {{ props.product?.price.toFixed(2) }}</CardContent
        >
        <slot></slot>
    </Card>
</template>
<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/primary/components/ui/card';
import CardImage from '@/primary/components/ui/card/CardImage.vue';

const props = defineProps({
    product: Object
});
</script>
