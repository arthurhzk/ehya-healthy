import { ref } from 'vue';
import supabase from '@/secondary/lib/supabase';
function useFitness() {
    const fitness = ref<any>([]);

    const fetchFitness = async (start: Date, end: Date) => {
        const response = await supabase
            .from('fitness')
            .select('*')
            .gte('created_at', start.toISOString())
            .lte('created_at', end.toISOString());
        fitness.value = response.data;
    };

    const addCalories = async (calories: number, goal: number) => {
        await supabase.from('fitness').insert([
            {
                calories: calories,
                goal: goal
            }
        ]);
    };

    return { fitness, fetchFitness, addCalories };
}

export default useFitness;
