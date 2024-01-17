<template>
    <fwb-navbar solid>
        <template #logo>
            <fwb-navbar-logo
                image-url="/img/backpack-logo.png"
                link="#"
            >
                Voyager Backpacks
            </fwb-navbar-logo>
        </template>
        <template #default="{ isShowMenu }">
            <fwb-navbar-collapse :is-show-menu="isShowMenu">
                <my-p
                    class="text-center border-b-2 border-gray-200 py-2 md:border-none"
                    v-for="path in paths"
                    >{{ path.name }}</my-p
                >
            </fwb-navbar-collapse>
        </template>
    </fwb-navbar>
</template>

<script lang="ts" setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLogo } from 'flowbite-vue';
import MyP from '@/primary/components/typography/MyP.vue';
import paths from '@/domain/data/paths';
</script>
