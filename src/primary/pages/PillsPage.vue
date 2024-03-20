<template>
    <section>
        <h1 class="text-gray-700 text-center md:text-start text-2xl ml-8 my-8">
            Prontuário de Medicamentos
        </h1>
    </section>

    <aside><TheSidebar /></aside>

    <div class="bg-white ml-20 mr-10 rounded-lg md:flex md:flex-wrap">
        <div v-for="medicine in sortMedicinesBySchedule">
            <ScheduleCard
                @deleteMedicine="deleteMedicines(medicine.id)"
                :time="medicine.schedule"
                :image="getRandomImage"
                :medicine="medicine.name"
                :description="medicine.details"
                :milligrams="medicine.milligrams"
                :quantity="medicine.quantity"
            />
        </div>
    </div>
    <div class="flex items-center justify-center mt-10 ml-7">
        <AddMonitoring
            title="Adicionar Medicamento"
            description="Adicione um medicamento para a sua rotina diária."
            button-text="Adicionar Medicamento"
            @click="addMedicines"
        >
            <div class="space-y-2">
                <p>Medicamento:</p>
                <Input
                    class="mx-auto w-1/4 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    v-model="state.name"
                />
            </div>
            <div class="space-y-2">
                <p>Dosagem:</p>
                <Input
                    class="mx-auto w-1/4 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    v-model="state.milligrams"
                />
            </div>
            <div class="space-y-2">
                <p>Quantidade:</p>
                <Input
                    class="mx-auto w-1/4 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    v-model="state.quantity"
                />
            </div>
            <div class="space-y-2">
                <p>Horário:</p>
                <Input
                    v-model="state.schedule"
                    class="mx-auto w-1/4 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="time"
                    required
                />
            </div>
            <div class="space-y-2">
                <p>Detalhes:</p>
                <Input
                    class="mx-auto w-1/4 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    v-model="state.details"
                />
            </div>
        </AddMonitoring>
    </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/primary/components/interfaces/TheSidebar.vue';

import AddMonitoring from '@/primary/components/interfaces/AddMonitoring.vue';
import { watchEffect, onMounted, computed } from 'vue';
import { Input } from '@/primary/components/ui/input';

import ScheduleCard from '@/primary/components/interfaces/ScheduleCard.vue';

import useMedicines from '@/primary/infrastructure/composables/useMedicines';
import { ref } from 'vue';

const { medicines, fetchMedicines, addMedicines, state, deleteMedicines } =
    useMedicines();

const sortMedicinesBySchedule = computed(() => {
    return medicines.value.sort((a: any, b: any) => {
        return a.schedule.localeCompare(b.schedule);
    });
});

const arrayOfImages = ref([
    '/img/Icon (7).png',
    '/img/Icon (8).png',
    '/img/Icon (9).png',
    '/img/Icon (10).png'
]);

const getRandomImage = computed(() => {
    const randomIndex = Math.floor(Math.random() * arrayOfImages.value.length);
    return arrayOfImages.value[randomIndex];
});

onMounted(() => {
    fetchMedicines();
});

watchEffect(() => {
    state.schedule;
});
</script>
