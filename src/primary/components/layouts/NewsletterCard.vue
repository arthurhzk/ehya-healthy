<template>
    <Card
        class="border-2 w-full h-[448px] rounded-md flex flex-col text-center justify-center items-center px-4 space-y-3"
        ><my-h2>{{ props.title }}</my-h2
        ><my-p>{{ props.description }}</my-p>
        <Input
            type="email"
            placeholder="Insira o seu e-mail"
        />
        <Button class="w-full">{{ props.buttonText }}</Button></Card
    >
</template>

<script setup lang="ts">
import Card from '@/primary/components/ui/card/Card.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import Button from '@/primary/components/ui/button/Button.vue';
import Input from '@/primary/components/ui/input/Input.vue';

const props = defineProps({
    title: String,
    description: String,
    buttonText: String
});
</script>
