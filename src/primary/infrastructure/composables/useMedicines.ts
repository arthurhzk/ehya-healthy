import { ref, reactive } from 'vue';
import supabase from '@/secondary/lib/supabase';
function useMedicines() {
    const medicines = ref<any>([]);
    const initialState = {
        name: '',
        milligrams: '',
        quantity: '',
        schedule: '',
        details: ''
    };

    const state = reactive(initialState);

    const fetchMedicines = async () => {
        const response = await supabase.from('medicines').select('*');
        medicines.value = response.data;
        if (response.error) {
            console.error(response.error);
        }
    };
    const addMedicines = async () => {
        const response = await supabase.from('medicines').insert([
            {
                name: state.name,
                milligrams: state.milligrams,
                quantity: state.quantity,
                schedule: state.schedule,
                details: state.details
            }
        ]);
        if (response.error) {
            console.error(response.error);
        }
        state.name = '';
        state.milligrams = '';
        state.quantity = '';
        state.schedule = '';
        state.details = '';
    };
    const deleteMedicines = async (id: string) => {
        const response = await supabase.from('medicines').delete().eq('id', id);

        if (response.error) {
            console.error(response.error);
        }
    };

    return { fetchMedicines, medicines, addMedicines, state, deleteMedicines };
}

export default useMedicines;
