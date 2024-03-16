<template>
    <section>
        <div class="flex items-center mt-4">
            <img :src="props.image" />
            <div class="space-y-2 ml-4">
                <h2 class="text-gray-700">{{ props.title }}</h2>
                <p class="text-sm text-gray-500">{{ props.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>
