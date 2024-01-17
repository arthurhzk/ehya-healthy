<template>
    <card class="py-6"
        ><card-image
            class="w-full flex items-center justify-center"
            image="/img/backpack-image-8.png"
        >
            <div class="flex flex-col text-center space-y-3 text-white">
                <my-h1 class="font-extralight">{{ props.title }}</my-h1>
                <my-p class="font-light px-3">{{ props.description }} </my-p>
                <my-h3 class="underline font-light">{{ props.start }}</my-h3>
            </div>
        </card-image>
    </card>
</template>

<script setup lang="ts">
import Card from '@/primary/components/ui/card/Card.vue';
import CardImage from '@/primary/components/ui/card/CardImage.vue';
import MyH1 from '@/primary/components/typography/MyH1.vue';
import MyH3 from '@/primary/components/typography/MyH3.vue';
import MyP from '@/primary/components/typography/MyP.vue';

const props = defineProps({
    title: String,
    description: String,
    start: String
});
</script>
