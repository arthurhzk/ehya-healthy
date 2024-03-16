<template>
    <section>
        <SideContainer>
            <div class="w-full flex">
                <div class="md:w-1/2 flex items-center">
                    <div class="space-y-4">
                        <h2
                            class="text-green-500 text-center md:text-start text-xl"
                        >
                            Nós estamos aqui por você
                        </h2>
                        <h1
                            class="text-gray-700 text-center md:text-start text-3xl"
                        >
                            Sua saúde é a Nossa Prioridade
                        </h1>
                        <p
                            class="text-gray-500 text-sm text-center md:text-start"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi minima mollitia laboriosam. Omnis illo
                            voluptates ipsum enim quas tempora officiis, qui
                            eius minus velit optio, minima expedita beatae
                            dolore. Facere.
                        </p>

                        <div class="flex gap-2">
                            <Button class="mx-auto md:mx-0">Entrar</Button>
                        </div>
                        <img
                            class="block md:hidden p-4 object-cover rounded-t-[150px] rounded-b-none mt-10"
                            src="/img/Nurse.jpg"
                        />
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img
                        class="hidden md:block p-4 object-cover rounded-t-[150px] rounded-b-none mt-10"
                        src="/img/Nurse.jpg"
                    />
                </div>
            </div>
        </SideContainer>
    </section>
    <section class="bg-[#E5F5F0] mt-24 pb-24">
        <SideContainer>
            <div
                class="flex flex-col py-16 items-center justify-center space-y-6"
            >
                <h2 class="text-green-500 text-center text-xl">Serviços</h2>
                <h1 class="text-gray-700 text-center m text-3xl">
                    Nossos serviços hospitalares
                </h1>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <ServiceCard
                    image="/img/Icon.png"
                    title="Cardiologia"
                    description="Nulla gravida, tellus et interdum malesuada, risus lectus ullamcorper."
                />
                <ServiceCard
                    image="/img/Icon (1).png"
                    title="Neurologia"
                    description="Donec venenatis dui sed dui porta, sit amet scelerisque ligula finibus."
                />
                <ServiceCard
                    image="/img/Icon (2).png"
                    title="Denstista"
                    description="Nam in erat et ipsum laoreet cursus. Etiam dignissim, leo vel fringilla."
                />
                <ServiceCard
                    image="/img/Icon (3).png"
                    title="Ginecológia"
                    description="Vivamus auctor, nunc nec lacinia lacinia, nunc nisl lacinia nisl."
                />
            </div>
        </SideContainer>
    </section>
    <section class="pb-24">
        <SideContainer>
            <div class="w-full flex flex-row-reverse">
                <div class="md:w-1/2 flex items-center">
                    <div class="space-y-4 md:ml-20">
                        <h2 class="text-green-500 text-center text-xl">
                            Sobre
                        </h2>
                        <h1 class="text-gray-700 text-center text-3xl">
                            Sua saúde é a Nossa Prioridade
                        </h1>
                        <div>
                            <GoodiesCard
                                image="/img/Icon (4).png"
                                title="Médicos Atualizados"
                                description="Proin pretium, libero ut semper lacinia, tortor stas lectus convallis libero, eget viverra."
                            />
                            <GoodiesCard
                                image="/img/Icon (5).png"
                                title="Atendimento 24 Horas"
                                description="Vivamus a elit volutpat, efficitur lectus at, odio an scelerisque odio. Aenean ullamcorper."
                            />
                            <GoodiesCard
                                image="/img/Icon (6).png"
                                title="Tecnologia Moderna"
                                description="Morbi gravida vulputate urna, vitae semper ipsum dignissim pellentesque."
                            />
                        </div>

                        <img
                            class="block md:hidden p-4 object-cover rounded-t-[150px] rounded-b-none mt-10"
                            src="/img/hospital-2.jpg"
                        />
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img
                        class="hidden md:block p-4 object-cover rounded-t-[150px] rounded-b-none mt-10"
                        src="/img/hospital-2.jpg"
                    />
                </div>
            </div>
        </SideContainer>
    </section>
    <section class="bg-[#E5F5F0] pb-24">
        <SideContainer>
            <div
                class="flex flex-col py-16 items-center justify-center space-y-6"
            >
                <h2 class="text-green-500 text-center text-xl">Médicos</h2>
                <h1 class="text-gray-700 text-center m text-3xl">
                    Conheça Nossos Médicos
                </h1>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <DoctorsCard
                    image="/img/doctor-1.jpg"
                    name="Dra. Carla Maria"
                    description="Cardiologista"
                />
                <DoctorsCard
                    image="/img/doctor-2.jpg"
                    name="Dra. Maria Joana"
                    description="Cardiologista"
                />
                <DoctorsCard
                    image="/img/doctor-3.jpg"
                    name="Dra. Salete Antunes"
                    description="Cardiologista"
                />
                <DoctorsCard
                    image="/img/doctor-4.jpg"
                    name="Dr. João Paulo"
                    description="Cardiologista"
                />
            </div>
        </SideContainer>
    </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/primary/components/interfaces/ServiceCard.vue';
import SideContainer from '@/primary/components/container/SideContainer.vue';
import GoodiesCard from '@/primary/components/interfaces/GoodiesCard.vue';
import DoctorsCard from '@/primary/components/interfaces/DoctorsCard.vue';
import { Button } from '@/primary/components/ui/button';
</script>
