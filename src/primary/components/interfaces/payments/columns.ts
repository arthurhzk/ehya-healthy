import { h } from 'vue';

import type { ColumnDef } from '@tanstack/vue-table';

export interface Fitness {
    calories: number;
    goal: number;
    created_at: Date;
}

interface Monitoring {
    glicemy: number | string;
    bloodPressure: number | string;
    heartRate: number | string;
}
export const columns: ColumnDef<Fitness>[] = [
    {
        accessorKey: 'created_at',
        header: () => h('div', 'Data'),
        cell: ({ row }) => h('div', row.getValue('created_at'))
    },
    {
        accessorKey: 'calories',
        header: () => h('div', 'Calorias'),
        cell: ({ row }) => h('div', row.getValue('calories'))
    },
    {
        accessorKey: 'goal',
        header: () => h('div', 'Meta'),
        cell: ({ row }) => h('div', row.getValue('goal'))
    }
];

export const monitoringColumn: ColumnDef<Monitoring>[] = [
    {
        accessorKey: 'created_at',
        header: () => h('div', 'Data'),
        cell: ({ row }) => h('div', row.getValue('created_at'))
    },
    {
        accessorKey: 'glicemy',
        header: () => h('div', 'Glicemia'),
        cell: ({ row }) => h('div', row.getValue('glicemy'))
    },
    {
        accessorKey: 'bloodPressure',
        header: () => h('div', 'Pressão Arterial'),
        cell: ({ row }) => h('div', row.getValue('bloodPressure'))
    },
    {
        accessorKey: 'heartRate',
        header: () => h('div', 'Frequência Cardíaca'),
        cell: ({ row }) => h('div', row.getValue('heartRate'))
    }
];
