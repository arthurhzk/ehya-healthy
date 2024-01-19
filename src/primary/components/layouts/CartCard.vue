<template>
    <section>
        <card class="border">
            <div class="flex space-y-2">
                <card-header>
                    <div class="flex items-start">
                        <img
                            class="w-1/4 rounded-md"
                            :src="props.product?.image"
                            alt=""
                        />
                        <div class="flex flex-col space-y-2">
                            <card-title class="ml-5">{{
                                props.product?.title
                            }}</card-title>
                            <card-content>{{
                                props.product?.price
                            }}</card-content>
                        </div>
                    </div>
                </card-header>
            </div>
        </card>
    </section>
</template>

<script setup lang="ts">
import Card from '@/primary/components/ui/card/Card.vue';
import CardHeader from '@/primary/components/ui/card/CardHeader.vue';
import CardTitle from '@/primary/components/ui/card/CardTitle.vue';
import CardContent from '@/primary/components/ui/card/CardContent.vue';

const props = defineProps({
    product: Object
});
</script>
