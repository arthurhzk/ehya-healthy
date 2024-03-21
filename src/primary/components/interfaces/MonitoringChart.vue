<template>
    <Line
        :data="chartData"
        :options="chartOptions"
    />
</template>

<script lang="ts">
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Line } from 'vue-chartjs';
import { Point } from 'node_modules/chart.js/dist/core/core.controller';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default {
    name: 'MonitoringChart',
    components: {
        Line
    },
    props: {
        glicemyJanuary: {
            type: Number,
            required: true
        },
        glicemyFebruary: {
            type: Number,
            required: true
        },
        glicemyMarch: {
            type: Number,
            required: true
        },
        glicemyApril: {
            type: Number,
            required: true
        },
        glicemyMay: {
            type: Number
        },
        glicemyJune: {
            type: Number
        },
        glicemyJuly: {
            type: Number
        },
        glicemyAugust: {
            type: Number
        },
        glicemySeptember: {
            type: Number
        },
        glicemyOctober: {
            type: Number
        },
        glicemyNovember: {
            type: Number
        },
        glicemyDecember: {
            type: Number
        }
    },
    data() {
        return {
            chartData: {
                labels: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'
                ],
                datasets: [
                    {
                        label: 'Glicemia',
                        backgroundColor: '#f87979',
                        data: [
                            this.glicemyJanuary,
                            this.glicemyFebruary,
                            this.glicemyMarch,
                            this.glicemyApril,
                            this.glicemyMay,
                            this.glicemyJune,
                            this.glicemyJuly,
                            this.glicemyAugust,
                            this.glicemySeptember,
                            this.glicemyOctober,
                            this.glicemyNovember,
                            this.glicemyDecember
                        ] as (number | Point | null)[]
                    },
                    {
                        label: 'Pressão',
                        backgroundColor: '#7c4dff',
                        data: [
                            40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80
                        ] as (number | Point | null)[]
                    },
                    {
                        label: 'Batimentos Cardíacos',
                        backgroundColor: '#4d7cff',
                        data: [
                            40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80
                        ] as (number | Point | null)[]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        };
    }
};
</script>
