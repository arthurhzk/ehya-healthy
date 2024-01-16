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
                <fwb-navbar-link
                    is-active
                    link="#"
                >
                    Home
                </fwb-navbar-link>
                <fwb-navbar-link link="#"> Services </fwb-navbar-link>
                <fwb-navbar-link link="#"> Pricing </fwb-navbar-link>
                <fwb-navbar-link link="#"> Contact </fwb-navbar-link>
            </fwb-navbar-collapse>
        </template>
    </fwb-navbar>
</template>

<script lang="ts" setup>
import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo
} from 'flowbite-vue';
</script>
