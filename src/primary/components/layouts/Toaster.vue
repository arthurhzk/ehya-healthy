<template>
    <Button
        variant="outline"
        @click="
            () => {
                toast({
                    title: props.title,
                    description: props.description
                });
            }
        "
    >
        {{ text }}
    </Button>
</template>

<script setup lang="ts">
import { Button } from '@/primary/components/ui/button';
import { useToast } from '@/primary/components/ui/toast/use-toast';

const { toast } = useToast();

const props = defineProps({
    title: String,
    description: String,
    text: String
});
</script>
