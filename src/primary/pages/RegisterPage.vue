<template>
    <side-container>
    <main class="space-y-8">
    <div class="flex items-center justify-center">
          <M1H1>Faça o seu Cadastro</M1H1>
        </div>
    <section class="flex flex-col ">
           
    <main class="flex flex-col ">
 
        <div :class="cn('grid gap-6', $attrs.class ?? '')">
            <form class="space-y-4" @submit="onSubmit">
   
                <div class="grid gap-2">
                    <div class="grid gap-1">
                        
                   
                        <div class="flex flex-col gap-4 items-center justify-center">
                            

                            <div class="flex items-center justify-center gap-2">
                            <Label name="email" for="">Email</Label>
                                <ph-envelope
                                
                      
                        class="mr-2 h-4 w-4"
                    />
                  
                </div>
              
                            <Input
                                class="w-1/2"
                                id="email"
                                placeholder="Digite o seu e-mail"
                                type="email"
                                auto-capitalize="none"
                                auto-complete="email"
                                auto-correct="off"
                                :disabled="isLoading"
                                v-model:model-value="state.email"
                            />
                            <div vif="errors?.email" class="text-red-600">
                        <span v-for="error in errors?.email?._errors">{{ error }}</span>
                    </div>
                            <div class="flex items-center justify-center gap-2">
                            <Label name="password" for="">Senha</Label>
                                <ph-key
                                
                      
                        class="mr-2 h-4 w-4"
                    />
                  
                </div>
               
                            <Input
                                class="w-1/2"
                                id="password"
                                placeholder="Digite a sua senha"
                                type="password"
                                auto-capitalize="none"
                                auto-complete="email"
                                auto-correct="off"
                                :disabled="isLoading"
                                v-model:model-value="state.password"
                            />
                            <div vif="errors?.password" class="text-red-600">
                        <span v-for="error in errors?.password?._errors">{{ error }}</span>
                    </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <Button class="mt-4"  :disabled="isLoading">
                             
                                Cadastrar
                                <Loader class="ml-2"
                                    v-if="isLoading"
                              
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t" />
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                    <span class="bg-background px-2 text-muted-foreground">
                        Ou continuar como
                    </span>
                </div>
            </div>
            <div class="flex items-center  justify-center">
                <Button
                    variant="outline"
                    type="button"
                    :disabled="isLoading"
                >
                 
                    <ph-github-logo
                   
                     
                    />
                  
                    GitHub
                </Button>
            </div>
        </div>
    </main>
</section>
</main>
 </side-container>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Loader from '@/primary/components/layouts/Loader.vue';
import { PhGithubLogo, PhKey, PhEnvelope } from '@phosphor-icons/vue';
import M1H1 from "@/primary/components/typography/MyH1.vue"
import { cn } from '@/secondary/lib/utils';
import { Button } from '@/primary/components/ui/button';
import { Input } from '@/primary/components/ui/input';
import {z} from "zod"
import SideContainer from "@/primary/components/containers/SideContainer.vue"
import {useUserStore} from "@/primary/infrastructure/store/user"
const {state, signUpUser} = useUserStore()
const isLoading = ref(false);
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null)
async function onSubmit(event: Event) {
   
    event.preventDefault();
    isLoading.value = true;
    const validSchema = schema.safeParse({
        email: state.email,
        password: state.password
    })
    if(!validSchema.success){
      errors.value = validSchema.error.format()
    } else {
        errors.value = null
        await signUpUser()
    }
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
}

const schema = z.object({
    email: z.string().email("Email inválido."),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres."),
})


type formSchemaType = z.infer<typeof schema>


</script>
