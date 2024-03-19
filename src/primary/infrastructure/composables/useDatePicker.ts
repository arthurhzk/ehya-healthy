import { startOfDay, endOfDay } from 'date-fns';
import { computed, ref } from 'vue';
function useDatePicker() {
    const date = ref(new Date());
    const dateBounds = computed(() => {
        return {
            start: startOfDay(date.value),
            end: endOfDay(date.value)
        };
    });
    return { dateBounds, date };
}

export default useDatePicker;
