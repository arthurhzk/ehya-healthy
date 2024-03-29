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
    <div class="hidden md:block items-center justify-center">
        <div class="fallbackValueSwitch chart-size">
            <p class="text-center">Comparatório</p>
            <VisBulletLegend :items="items" />
            <VisXYContainer
                :duration="0"
                :height="300"
                :xDomain="[1, 12]"
                :yDomain="[0, 600]"
            >
                <VisLine
                    :data="glicemyData"
                    :x="(d: any) => d.x"
                    :y="(d: any) => d.y"
                    color="#1E90FF"
                />

                <VisLine
                    :data="bloodPressureData"
                    :x="(d: any) => d.x"
                    :y="(d: any) => d.y"
                    color="#FF6347"
                />
                <VisLine
                    :data="heartRateData"
                    :x="(d: any) => d.x"
                    :y="(d: any) => d.y"
                    color="#FFD700"
                />

                <VisAxis
                    type="x"
                    :numTicks="12"
                    label="Média Anual"
                />
                <VisAxis
                    type="y"
                    label="Relatório Mensal"
                    :tickValues="[0, 200, 400, fallbackValue, 600]"
                    :numTicks="6"
                />
            </VisXYContainer>
        </div>
    </div>

    <div class="mx-auto w-1/2 mt-20">
        <DataTable
            :columns="monitoringColumn"
            :data="mapTableArray"
        />
    </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/primary/components/interfaces/TheSidebar.vue';
import MonitoringCard from '@/primary/components/interfaces/MonitoringCard.vue';
import SideContainer from '@/primary/components/container/SideContainer.vue';
import AddMonitoring from '@/primary/components/interfaces/AddMonitoring.vue';
import useMonitoring from '@/primary/infrastructure/composables/useMonitoring';
import DataTable from '@/primary/components/interfaces/payments/DataTable.vue';
import { legendItems } from '@/domain/data/system-chart';
import { cn } from '@/secondary/lib/utils';
import {
    format,
    startOfDay,
    endOfDay,
    startOfMonth,
    endOfMonth,
    getMonth
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { Button } from '@/primary/components/ui/button';
import { Calendar } from '@/primary/components/ui/calendar';
import { VisXYContainer, VisLine, VisBulletLegend, VisAxis } from '@unovis/vue';
import { toast } from 'vue-sonner';
import { z } from 'zod';

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/primary/components/ui/popover';
import { Input } from '@/primary/components/ui/input';
import { ref, computed, onMounted, watch } from 'vue';
import { monitoringColumn } from '@/primary/components/interfaces/payments/columns';
const comp = useMonitoring();
const date = ref<Date>(new Date());
const curr = ref(0);
const dateBounds = computed(() => {
    return {
        start: startOfDay(date.value),
        end: endOfDay(date.value)
    };
});

const monthBounds = computed(() => {
    return {
        start: startOfMonth(date.value),
        end: endOfMonth(date.value)
    };
});

const schema = z.object({
    glicemy: z.number().min(30).max(600),
    bloodPressure: z.number().min(40).max(200),
    heartRate: z.number().min(30).max(220)
});

watch(
    () => date.value,
    () => comp.fetchMonitoring(dateBounds.value.start, dateBounds.value.end),
    { deep: true }
);

onMounted(() => {
    comp.fetchMonitoring(dateBounds.value.start, dateBounds.value.end);
    comp.fetchMonthMonitoring(monthBounds.value.start, monthBounds.value.end);
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
    const validSchema = schema.safeParse({
        glicemy: comp.state.glicemy,
        bloodPressure: comp.state.bloodPressure,
        heartRate: comp.state.heartRate
    });

    if (!validSchema.success) {
        toast.error('Valores inválidos!', {
            style: {
                background: '#FF6347',
                color: '#fff'
            }
        });
    } else {
        try {
            await comp.addData();
            await comp.fetchMonitoring(
                dateBounds.value.start,
                dateBounds.value.end
            );
            await comp.fetchMonthMonitoring(
                monthBounds.value.start,
                monthBounds.value.end
            );
            toast.success('Monitoramento adicionado com sucesso!', {
                style: {
                    background: '#008000',
                    color: '#fff'
                }
            });
        } catch (e) {
            toast.error('Ocorreu um erro!', {
                style: {
                    background: '#FF6347',
                    color: '#fff'
                }
            });
        }
    }
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

const monitoringReducer = (property: string) => {
    const computedProperty = computed(() => {
        if (!comp.monthMonitoring.value) {
            return {};
        }
        return comp.monthMonitoring.value.reduce((acc: any, sum: any) => {
            const month = getMonth(new Date(sum.created_at));
            if (!acc[month]) {
                acc[month] = 0;
            }
            acc[month] += parseInt(sum[property]);
            return acc;
        }, {});
    });
    return computedProperty;
};

const glicemyReducer = monitoringReducer('glicemy');
const bloodPressureReducer = monitoringReducer('blood_pressure');
const heartRateReducer = monitoringReducer('heart_rate');

const fallbackValue = computed(() => legendItems[curr.value]);

const items = computed(() =>
    legendItems.map((o) => ({
        name: o.name
    }))
);

const glicemyData = computed(() =>
    Array.from({ length: 12 }, (_, i) => {
        return { x: i + 1, y: glicemyReducer.value[i] || 0 };
    })
);

const bloodPressureData = computed(() =>
    Array.from({ length: 12 }, (_, i) => {
        return { x: i + 1, y: bloodPressureReducer.value[i] || 0 };
    })
);

const heartRateData = computed(() =>
    Array.from({ length: 12 }, (_, i) => {
        return { x: i + 1, y: heartRateReducer.value[i] || 0 };
    })
);

const mapTableArray = computed(() => {
    if (!comp.monitoring.value) {
        return [];
    }
    return comp.monthMonitoring.value.map((item: any) => {
        return {
            glicemy: item.glicemy,
            bloodPressure: item.blood_pressure,
            heartRate: item.heart_rate,
            created_at: format(new Date(item.created_at), 'PPP', {
                locale: ptBR
            })
        };
    });
});
</script>

<style scoped>
.fallbackValueSwitch {
    width: 415px;
    background-color: #f8f8f8;
    padding: 10px 20px;
    display: inline-block;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    margin-bottom: 10px;
}

.chart-size {
    width: 50%;
    height: 300px;
    margin: auto;
    margin-top: 50px;
    display: block;
}
</style>
