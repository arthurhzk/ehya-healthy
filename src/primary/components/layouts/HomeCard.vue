<template>
    <Card>
        <CardHeader>
            <CardImage :image="props.product?.image" />
            <CardContent class="text-center text-gray-600">
                {{ props.product?.type }}</CardContent
            >
            <CardTitle class="text-center font-semibold">{{
                props.product?.title
            }}</CardTitle>
        </CardHeader>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/primary/components/ui/card/Card.vue';
import CardHeader from '@/primary/components/ui/card/CardHeader.vue';
import CardImage from '@/primary/components/ui/card/CardImage.vue';
import CardTitle from '@/primary/components/ui/card/CardTitle.vue';
import CardContent from '@/primary/components/ui/card/CardContent.vue';
const props = defineProps({
    product: Object
});
</script>
