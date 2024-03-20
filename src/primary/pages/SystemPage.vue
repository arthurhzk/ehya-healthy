<template>
    <SideContainer>
        <div
            class="flex flex-col md:flex-row items-center justify-center gap-4 md:justify-around my-8"
        >
            <h1 class="text-gray-700 text-center md:text-start text-3xl">
                Dashboard
            </h1>

            <Popover>
                <PopoverTrigger as-child>
                    <Button
                        :variant="'outline'"
                        :class="
                            cn(
                                'w-[280px] justify-start text-left font-normal',
                                !date && 'text-muted-foreground'
                            )
                        "
                    >
                        <CalendarIcon class="mr-2 h-4 w-4" />
                        <span>{{
                            date
                                ? format(date, 'PPP', { locale: ptBR })
                                : 'Escolha uma data'
                        }}</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                    <Calendar v-model="date" />
                </PopoverContent>
            </Popover>

            <AddMonitoring
                title="Faça o seu Checkup Diariamente"
                description="Utilize nosso serviço de Checkup para fazer o Monitoramento de sua Saúde"
                button-text="Adicionar Monitoramento"
                @click="addData"
            >
                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Input
                        type="number"
                        placeholder="Glicemia"
                        v-model:model-value="comp.state.glicemy"
                    />
                    <Input
                        type="number"
                        placeholder="Pressão Arterial"
                        v-model:model-value="comp.state.bloodPressure"
                    />
                    <Input
                        type="number"
                        placeholder="Batimentos Cardíacos"
                        v-model:model-value="comp.state.heartRate"
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
                :rateIcon="card.rateIcon"
            />
        </v-col>
    </v-row>
    <div class="big-chart"><MonitoringChart /></div>

    <AlertDialog>
        <AlertDialogTrigger as-child>
            <div class="flex items-center justify-center mt-8">
                <Button class="sm:block md:hidden"> Abrir Gráfico </Button>
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <div class="small-chart"><MonitoringChart /></div
        ></AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
import TheSidebar from '@/primary/components/interfaces/TheSidebar.vue';
import MonitoringCard from '@/primary/components/interfaces/MonitoringCard.vue';
import SideContainer from '@/primary/components/container/SideContainer.vue';
import MonitoringChart from '@/primary/components/interfaces/MonitoringChart.vue';
import AddMonitoring from '@/primary/components/interfaces/AddMonitoring.vue';

import useMonitoring from '@/primary/infrastructure/composables/useMonitoring';
import { cn } from '@/secondary/lib/utils';
import { format, startOfDay, endOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-vue-next';

import { Button } from '@/primary/components/ui/button';
import { Calendar } from '@/primary/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/primary/components/ui/popover';
import { Input } from '@/primary/components/ui/input';

import { ref, computed, onMounted, watch } from 'vue';

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger
} from '@/primary/components/ui/alert-dialog';

const comp = useMonitoring();
const date = ref<Date>(new Date());

const dateBounds = computed(() => {
    return {
        start: startOfDay(date.value),
        end: endOfDay(date.value)
    };
});

watch(
    () => date.value,
    () => comp.fetchMonitoring(dateBounds.value.start, dateBounds.value.end),
    { deep: true }
);

onMounted(() => {
    comp.fetchMonitoring(dateBounds.value.start, dateBounds.value.end);
});

const getLastValue = (property: string) =>
    computed(() => {
        if (comp.monitoring.value && comp.monitoring.value.length > 0) {
            return comp.monitoring.value[comp.monitoring.value.length - 1][
                property
            ];
        }
        return null;
    });

const getRateIcon = (feedback: string) =>
    computed(() => {
        if (feedback === 'Elevado') return 'mdi-alert';
        if (feedback === 'Normal') return 'mdi-check-circle';
        return 'mdi-arrow-down-bold-circle';
    });

const getLastGlicemy = getLastValue('glicemy');
const getLastBloodPressure = getLastValue('blood_pressure');
const getLastHeartRate = getLastValue('heart_rate');

const addData = async () => {
    await comp.addData();
    await comp.fetchMonitoring(dateBounds.value.start, dateBounds.value.end);
};

const getFeedback = (value: number, high: number, normal: number) => {
    if (value > high) return 'Elevado';
    if (value > normal) return 'Normal';
    return 'Baixo';
};

const glicemyFeedback = computed(() =>
    getFeedback(getLastGlicemy.value, 99, 70)
);
const heartRateFeedback = computed(() =>
    getFeedback(getLastHeartRate.value, 100, 60)
);
const bloodPressureFeedback = computed(() =>
    getFeedback(getLastBloodPressure.value, 120, 80)
);

const cards = computed(() => [
    {
        title: 'Glicemia',
        risk: glicemyFeedback.value,
        value: getLastGlicemy.value,
        rateIcon: getRateIcon(glicemyFeedback.value).value,
        icon: 'mdi-diabetes'
    },
    {
        title: 'Pressão Arterial',
        risk: bloodPressureFeedback.value,
        value: getLastBloodPressure.value,
        rateIcon: getRateIcon(bloodPressureFeedback.value).value,
        icon: 'mdi-hospital'
    },
    {
        title: 'Batimentos Cardíacos',
        risk: heartRateFeedback.value,
        value: getLastHeartRate.value,
        rateIcon: getRateIcon(heartRateFeedback.value).value,
        icon: 'mdi-heart-pulse'
    }
]);
</script>

<style scoped>
.big-chart {
    width: 700px;
    height: 400px;
    margin: auto;
    margin-top: 50px;
    display: block;
}

.small-chart {
    width: 100%;
    height: 400px;
    margin: auto;
}

@media (max-width: 768px) {
    .big-chart {
        display: none;
    }
    .small-chart {
        display: block;
    }
}
</style>
