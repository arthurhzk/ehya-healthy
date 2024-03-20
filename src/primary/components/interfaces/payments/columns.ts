import { h } from 'vue';

import type { ColumnDef } from '@tanstack/vue-table';

export interface Fitness {
    calories: number;
    goal: number;
    created_at: Date;
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
