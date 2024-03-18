<template>
    <SideContainer>
        <div
            class="flex flex-col md:flex-row items-center justify-center gap-4 md:justify-around my-8"
        >
            <h1 class="text-gray-700 text-center md:text-start text-3xl">
                Dashboard
            </h1>

            <TheCalendar />

            <AddMonitoring
                title="Faça o seu Checkup Diariamente"
                description="Utilize nosso serviço de Checkup para fazer o Monitoramento de sua Saúde"
                button-text="Adicionar Monitoramento"
            >
                <div
                    class="grid w-full max-w-sm items-center gap-1.5"
                    v-for="(input, index) in inputs"
                    :key="index"
                >
                    <Input
                        :id="input.id"
                        :type="input.type"
                        :placeholder="input.placeholder"
                    />
                </div>
            </AddMonitoring>
        </div>
    </SideContainer>

    <aside><TheSidebar /></aside>

    <v-row
        class="wrap justify-center align-center"
        dense
    >
        <v-col
            cols="12"
            md="3"
            lg="3"
            v-for="(card, index) in cards"
            :key="index"
        >
            <MonitoringCard
                :title="card.title"
                :risk="card.risk"
                :value="card.value"
                :icon="card.icon"
            />
        </v-col>
    </v-row>

    <div class="chart-size"><MonitoringChart /></div>
</template>

<script setup lang="ts">
import TheSidebar from '@/primary/components/interfaces/TheSidebar.vue';
import MonitoringCard from '@/primary/components/interfaces/MonitoringCard.vue';
import SideContainer from '@/primary/components/container/SideContainer.vue';
import TheCalendar from '@/primary/components/interfaces/TheCalendar.vue';
import MonitoringChart from '@/primary/components/interfaces/MonitoringChart.vue';
import AddMonitoring from '@/primary/components/interfaces/AddMonitoring.vue';
import { Input } from '@/primary/components/ui/input';
import { ref } from 'vue';

const inputs = ref([
    { id: 'glicemia', type: 'email', placeholder: 'Glicemia' },
    { id: 'pressao', type: 'email', placeholder: 'Pressão Arterial' },
    { id: 'batimentos', type: 'email', placeholder: 'Batimentos Cardíacos' }
]);
const cards = ref([
    {
        title: 'Glicemia',
        risk: 'Elevado',
        value: '120 mg/dL',
        icon: 'mdi-diabetes'
    },
    {
        title: 'Pressão Arterial',
        risk: 'Normal',
        value: '80/120 mmHg',
        icon: 'mdi-hospital'
    },
    {
        title: 'Batimentos Cardíacos',
        risk: 'Baixo',
        value: '60 bpm',
        icon: 'mdi-heart-pulse'
    }
]);
</script>

<style scoped>
.chart-size {
    width: 700px;
    height: 400px;
    margin: auto;
    margin-top: 50px;
}
</style>
