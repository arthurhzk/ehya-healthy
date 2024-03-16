<template>
    <div
        class="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
        <div
            class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
        >
            <div class="absolute inset-0 bg-zinc-900"></div>
            <div class="relative z-20 flex items-center text-lg font-medium">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="mr-2 h-6 w-6"
                >
                    <path
                        d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
                    />
                </svg>
                ehya
            </div>
            <div class="relative z-20 mt-auto">
                <blockquote class="space-y-2">
                    <p class="text-lg">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                    </p>
                    <footer class="text-sm">John Doe</footer>
                </blockquote>
            </div>
        </div>
        <div class="lg:p-8">
            <div
                class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
            >
                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="text-2xl font-semibold tracking-tight">
                        Iniciar
                    </h1>
                    <p class="text-sm text-muted-foreground">
                        Coloque seu email e senha para iniciar
                    </p>
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="email">Email:</Label>
                    <Input
                        v-model:modelValue="user.email"
                        id="email"
                        type="email"
                        placeholder="johndoe@email.com"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="password">Senha:</Label>
                    <Input
                        v-model:modelValue="user.password"
                        id="password"
                        type="password"
                    />
                </div>
                <Button
                    @click="signIn"
                    class="w-full"
                >
                    Entrar
                    <Loader class="ml-4 animate-spin" />
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Input } from '@/primary/components/ui/input';
import { Label } from '@/primary/components/ui/label';
import { Button } from '@/primary/components/ui/button';

import { reactive } from 'vue';
import { useToast } from '@/primary/components/ui/toast';

import { Loader } from 'lucide-vue-next';

const { toast } = useToast();

const user = reactive({
    email: '',
    password: ''
});

const signIn = async () => {
    try {
        toast({
            title: 'Sucesso',
            description: 'Usuário logado com sucesso',
            class: 'bg-[#8a4baf] text-white'
        });
    } catch (e: unknown) {
        toast({
            title: 'Erro',
            description: e instanceof Error ? e.message : 'Ocorreu um erro',
            variant: 'destructive'
        });
    }
};
</script>
