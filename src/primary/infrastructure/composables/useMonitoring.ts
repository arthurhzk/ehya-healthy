import supabase from '@/secondary/lib/supabase';
import { reactive, ref } from 'vue';

interface Monitoring {
    glicemy: number | string;
    bloodPressure: number | string;
    heartRate: number | string;
}

function useMonitoring() {
    const initialState: Monitoring = {
        glicemy: '',
        bloodPressure: '',
        heartRate: ''
    };

    const state = reactive<Monitoring>(initialState);

    const monitoring = ref<Monitoring | any>();

    const date = ref<Date>(new Date());

    const fetchMonitoring = async (start: Date, end: Date) => {
        const response = await supabase
            .from('monitoring')
            .select('*')
            .gte('created_at', start.toISOString())
            .lte('created_at', end.toISOString());
        if (response.error) {
            throw new Error(response.error.message);
        }
        monitoring.value = response.data;
    };

    const addData = async () => {
        const response = await supabase.from('monitoring').insert([
            {
                glicemy: state.glicemy,
                blood_pressure: state.bloodPressure,
                heart_rate: state.heartRate
            }
        ]);

        if (response.error) {
            throw new Error(response.error.message);
        }
    };
    return { state, fetchMonitoring, addData, monitoring };
}

export default useMonitoring;
