import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/primary/index.css';
import App from '@/primary/App.vue';
import router from '@/primary/infrastructure/router';
import PhosphorIcons from '@phosphor-icons/vue';
const pinia = createPinia();
createApp(App).use(router).use(PhosphorIcons).use(pinia).mount('#app');
