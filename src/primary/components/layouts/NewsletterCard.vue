<template>
    <Card
        class="border-2 w-full h-[448px] rounded-md flex flex-col text-center justify-center items-center px-4 space-y-3"
        ><my-h2>{{ props.title }}</my-h2
        ><my-p>{{ props.description }}</my-p>
        <div class="md:flex space-y-2">
            <div class="flex items-center">
                <ph-envelope-simple :size="24" />
                <Input
                    class="md:border-none"
                    type="email"
                    placeholder="Insira o seu e-mail"
                />
            </div>
            <Button
                variant="default"
                class="md:border-none md:bg-transparent md:text-black md:hover:bg-slate-100"
                >{{ props.buttonText }}</Button
            >
        </div>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/primary/components/ui/card/Card.vue';
import MyH2 from '@/primary/components/typography/MyH2.vue';
import MyP from '@/primary/components/typography/MyP.vue';
import Button from '@/primary/components/ui/button/Button.vue';
import Input from '@/primary/components/ui/input/Input.vue';
import { PhEnvelopeSimple } from '@phosphor-icons/vue';
const props = defineProps({
    title: String,
    description: String,
    buttonText: String
});
</script>
