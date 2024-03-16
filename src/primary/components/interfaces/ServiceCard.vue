<template>
    <Card class="w-[262px]">
        <CardHeader>
            <img
                class="mx-auto"
                :src="props.image"
            />
            <CardDescription class="text-center">{{
                props.title
            }}</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div class="grid items-center w-full gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <p class="text-gray-400 text-center">
                            {{ props.description }}
                        </p>
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex items-center justify-center">
            <Button class="px-10 uppercase rounded-xl">Leia mais</Button>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader
} from '@/primary/components/ui/card';

import { Button } from '@/primary/components/ui/button';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>
