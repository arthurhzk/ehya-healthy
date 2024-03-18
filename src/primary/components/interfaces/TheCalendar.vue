<template>
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
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { ptBR } from 'date-fns/locale';
import { ref } from 'vue';
import { cn } from '@/secondary/lib/utils';
import { Button } from '@/primary/components/ui/button';
import { Calendar } from '@/primary/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/primary/components/ui/popover';

const date = ref<Date>(new Date());
</script>
