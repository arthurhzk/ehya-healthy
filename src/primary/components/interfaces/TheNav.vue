<template>
    <section class="bg-white py-6">
        <SideContainer>
            <NavigationMenu class="flex mx-auto">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <div class="flex items-center">
                            <img src="/img/Triangle.png" />
                            <NavigationMenuTrigger
                                >ehya - Sistema de saúde</NavigationMenuTrigger
                            >
                        </div>

                        <NavigationMenuContent>
                            <ul
                                class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
                            >
                                <li class="row-span-3">
                                    <NavigationMenuLink as-child>
                                        <a
                                            class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <img
                                                src="https://www.radix-vue.com/logo.svg"
                                                class="h-6 w-6"
                                            />
                                            <div
                                                class="mb-2 mt-4 text-lg font-medium"
                                            >
                                                shadcn/ui
                                            </div>
                                            <p
                                                class="text-sm leading-tight text-muted-foreground"
                                            >
                                                Beautifully designed components
                                                built with Radix UI and Tailwind
                                                CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="/docs"
                            :class="navigationMenuTriggerStyle()"
                        >
                            Sobre a nossa empresa
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div class="flex gap-2">
                    <Button variant="outline">Entrar</Button>
                    <Button>Cadastrar</Button>
                </div>
            </NavigationMenu>
        </SideContainer>
    </section>
</template>

<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/primary/components/ui/navigation-menu';
import SideContainer from '@/primary/components/container/SideContainer.vue';
import { Button } from '@/primary/components/ui/button';
</script>
