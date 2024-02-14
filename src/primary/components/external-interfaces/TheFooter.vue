<template>
    <section class="absolute">
        <fwb-footer>
            <fwb-footer-copyright
                by="Voyage Leather Goods co.™"
                href="#"
                copyright-message="Todos os direitos reservados."
            />
            <fwb-footer-link-group>
                <fwb-footer-link
                    class="ml-2"
                    href="#"
                >
                    Sobre
                </fwb-footer-link>
                <fwb-footer-link href="#">
                    Politicas de Privacidade
                </fwb-footer-link>
                <fwb-footer-link href="#"> Contato </fwb-footer-link>
            </fwb-footer-link-group>
        </fwb-footer>
    </section>
</template>

<script lang="ts" setup>
import {
    FwbFooter,
    FwbFooterCopyright,
    FwbFooterLink,
    FwbFooterLinkGroup
} from 'flowbite-vue';
</script>
