<template>
    <section>
        <h1 class="text-gray-700 text-center md:text-start text-2xl ml-8 my-8">
            Monitormanto de Exercícios
        </h1>
    </section>
    <aside><TheSidebar /></aside>
    <section class="w-1/2 mx-auto">
        <div class="p-4 pb-0">
            <div class="flex items-center justify-center space-x-2">
                <Button
                    variant="outline"
                    size="icon"
                    class="h-8 w-8 shrink-0 rounded-full"
                    :disabled="setGoal <= 200"
                    @click="decreaseGoal"
                >
                    <Minus class="h-4 w-4" />
                    <span class="sr-only">Diminuir</span>
                </Button>
                <div class="flex-1 text-center">
                    <div class="text-7xl font-bold tracking-tighter">
                        {{ setGoal }}
                    </div>

                    <div class="text-[0.70rem] uppercase text-muted-foreground">
                        Calorias/dia
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    class="h-8 w-8 shrink-0 rounded-full"
                    :disabled="setGoal >= 10000"
                    @click="increaseGoal"
                >
                    <Plus class="h-4 w-4" />
                    <span class="sr-only">Aumentar</span>
                </Button>
            </div>
            <div class="my-3 px-3 h-[120px]">
                <VisXYContainer
                    :data="data"
                    class="h-[120px]"
                    :style="{
                        opacity: 0.9
                    }"
                >
                    <VisStackedBar
                        :x="(d: Data, i: number) => i"
                        :y="(d: any) => d.calories"
                        :bar-padding="0.1"
                        :rounded-corners="0"
                    />

                    <VisAxis
                        type="x"
                        :tickFormat="(i: number) => data[i].name"
                        :numTicks="data.length"
                    />
                    <VisAxis type="y" />
                </VisXYContainer>
            </div>
        </div>
    </section>
    <div class="flex items-center justify-center">
        <AddMonitoring
            @click="add"
            button-text="Adicionar Calorias"
            title="Monitore as suas Calorias"
            description="Adicione as calorias que você consumiu hoje."
        >
            <Input
                v-model="calories"
                type="number"
                label="Calorias"
                placeholder="Digite a quantidade de calorias"
            />
        </AddMonitoring>
    </div>
    <div class="mx-auto w-1/2">
        <DataTable
            :columns="columns"
            :data="transformDataArray"
        />
    </div>
</template>

<script setup lang="ts">
import { VisStackedBar, VisXYContainer, VisAxis } from '@unovis/vue';
import { ref, onMounted, computed, watch } from 'vue';
import { Minus, Plus } from 'lucide-vue-next';
import { Button } from '@/primary/components/ui/button';
import { Input } from '@/primary/components/ui/input';
import AddMonitoring from '@/primary/components/interfaces/AddMonitoring.vue';
import TheSidebar from '@/primary/components/interfaces/TheSidebar.vue';
import useFitness from '@/primary/infrastructure/composables/useFitness';
import { startOfWeek, endOfWeek } from 'date-fns';
import DataTable from '@/primary/components/interfaces/payments/DataTable.vue';
import { columns } from '@/primary/components/interfaces/payments/columns';

const { fetchFitness, addCalories, fitness } = useFitness();

const add = () => {
    addCalories(calories.value, setGoal.value);
    calories.value = '';
};

const setGoal = computed({
    get: () => fitness.value[fitness.value.length - 1]?.goal || 0,
    set: (newValue) => {
        const lastFitness = fitness.value[fitness.value.length - 1];
        lastFitness.goal = newValue;
    }
});

const increaseGoal = () => {
    setGoal.value += 10;
};

const decreaseGoal = () => {
    setGoal.value -= 10;
};

const dateBounds = computed(() => {
    return {
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    };
});

const calories = ref();

onMounted(() => {
    fetchFitness(dateBounds.value.start, dateBounds.value.end);
});

type Data = typeof data;

const sumCaloriesByDayOfWeek = computed(() => {
    return fitness.value.reduce((acc: any, curr: any) => {
        const day = new Date(curr.created_at).getDay();
        acc[day] = (acc[day] || 0) + curr.calories;
        return acc;
    }, {});
});

watch(
    () => Date.now(),
    () => fetchFitness(dateBounds.value.start, dateBounds.value.end),
    { deep: true }
);

const data = computed(() => [
    { name: 'Domingo', calories: sumCaloriesByDayOfWeek.value[0] || 0 },
    { name: 'Segunda-Feira', calories: sumCaloriesByDayOfWeek.value[1] || 0 },
    { name: 'Terça-Feira', calories: sumCaloriesByDayOfWeek.value[2] || 0 },
    { name: 'Quarta-Feira', calories: sumCaloriesByDayOfWeek.value[3] || 0 },
    { name: 'Quinta-Feira', calories: sumCaloriesByDayOfWeek.value[4] || 0 },
    { name: 'Sexta-Feira', calories: sumCaloriesByDayOfWeek.value[5] || 0 },
    { name: 'Sábado', calories: sumCaloriesByDayOfWeek.value[6] || 0 }
]);

const transformDataArray = computed(() => {
    return fitness.value.map((item: any) => {
        return {
            ...item,
            created_at: new Date(item.created_at).toLocaleDateString()
        };
    });
});
</script>
