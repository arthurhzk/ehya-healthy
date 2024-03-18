import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useToggleStore = defineStore('toggle', () => {
    const isToggled = ref<boolean>(false);
    const toggle = () => {
        isToggled.value = !isToggled.value;
    };
    return {
        isToggled,
        toggle
    };
});
