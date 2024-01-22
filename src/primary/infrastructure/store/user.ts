
import { defineStore } from "pinia";
import { supabase } from "@/secondary/lib/supabase"
import { ref } from "vue"
export const useUserStore = defineStore("users", () => {
  const initialState = {
    email: "",
    password: "",
  };

const state = ref(initialState)

  const signUpUser = async ()=>{
try{
  await supabase.auth.signUp({
    email: state.value.email,
    password: state.value.password,
  })
}
catch(error){
  console.log(error)
}

  }
  return {state,
    signUpUser
  };
});
