<template>
    <section>
        <div class="flex space-y-2 bg-slate-50 p-1 md:w-1/2 rounded-md">
            <div class="flex">
                <ph-trash
                    @click="buttonClick"
                    class="text-red-500 cursor-pointer relative"
                    size="24"
                />
                <img
                    class="w-[217px] h-[269px] ml-10 rounded-md"
                    :src="props.product?.image"
                    alt=""
                />
                <div class="flex flex-col space-y-2">
                    <card-title class="ml-5">{{
                        props.product?.title
                    }}</card-title>
                    <card-content
                        >R$ {{ props.product?.price.toFixed(2) }}</card-content
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import CardTitle from '@/primary/components/ui/card/CardTitle.vue';
import CardContent from '@/primary/components/ui/card/CardContent.vue';
import { PhTrash } from '@phosphor-icons/vue';

const props = defineProps({
    product: Object
});

const emit = defineEmits(['delete']);

const buttonClick = () => {
    emit('delete');
};
</script>
