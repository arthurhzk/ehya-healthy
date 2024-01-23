import { defineStore } from 'pinia';
import { supabase } from '@/secondary/lib/supabase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export const useUserStore = defineStore('users', () => {
    const initialState = {
        email: '',
        password: ''
    };

    const router = useRouter();
    const userEmail = ref();
    const isLoggedIn = ref<boolean>(false);
    const accessToken = ref();
    const state = ref(initialState);

    const signUpUser = async () => {
        try {
            const response = await supabase.auth.signUp({
                email: state.value.email,
                password: state.value.password
            });
            accessToken.value = response.data.session?.access_token;

            if (accessToken.value) {
                isLoggedIn.value = true;
            } else {
                throw new Error('Acesso negado, access token não encontrado');
            }
        } catch (error) {
            console.log(error);
            isLoggedIn.value = false;
        }
    };

    const getUserMetadata = async () => {
        try {
            isLoggedIn.value = true;
            const response = await supabase.auth.getUser();
            userEmail.value = response?.data.user?.email;
            console.log(response);
        } catch (error) {
            console.log(error);
            isLoggedIn.value = false;
        }
    };

    const signInUser = async () => {
        try {
            await supabase.auth.signInWithPassword({
                email: state.value.email,
                password: state.value.password
            });
            await getUserMetadata();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const signOutUser = async () => {
        await supabase.auth.signOut();
        isLoggedIn.value = false;
    };

    return {
        state,
        isLoggedIn,
        signUpUser,
        signInUser,
        signOutUser,
        getUserMetadata,
        userEmail
    };
});
