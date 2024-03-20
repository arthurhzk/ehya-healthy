<template>
    <section class="pr-2">
        <div class="flex flex-col text-center md:flex-row md:text-start p-4">
            <p class="text-gray-500 p-4">{{ props.time }}</p>

            <div class="border rounded-lg">
                <div class="flex items-center p-4">
                    <div class="flex flex-col items-center gap-4">
                        <X
                            @click="deleteMedicine(props.medicine)"
                            class="w-6 h-6 text-gray-500 cursor-pointer"
                        />
                        <img
                            class="w-9 h-9"
                            :src="props.image"
                        />
                    </div>
                    <div class="flex flex-col justify-center mt-4 px-4">
                        <div
                            class="flex flex-col md:flex-row items-center gap-2"
                        >
                            <h2 class="font-semibold">
                                {{ props.medicine }}
                            </h2>

                            <p class="text-gray-700 text-sm">
                                {{ props.milligrams }}
                            </p>
                        </div>

                        <div>
                            <p class="text-gray-500 text-sm">
                                {{ props.description }}
                            </p>
                            <p class="text-gray-500 text-sm">
                                Quantidade: {{ props.quantity }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';

const emit = defineEmits(['deleteMedicine']);
const props = defineProps({
    time: String,
    image: String,
    medicine: String,
    description: String,
    milligrams: String,
    quantity: String
});

const deleteMedicine = (medicine: any) => {
    emit('deleteMedicine', medicine);
};
</script>
