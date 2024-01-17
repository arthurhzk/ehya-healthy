<template>
    <Carousel class="relative w-full max-w-xs ml-16">
        <CarouselContent>
            <CarouselItem
                v-for="product in homeProducts"
                :key="product.id"
            >
                <div class="p-1">
                    <Card>
                        <CardContent
                            class="flex aspect-square items-center justify-center p-6"
                        >
                            <img
                                :src="product.image"
                                class="w-full h-full object-cover"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>

<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/primary/components/ui/carousel';
import { Card, CardContent } from '@/primary/components/ui/card';
import homeProducts from '@/domain/data/homeProducts';
</script>
