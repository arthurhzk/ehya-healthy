import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/primary/index.css';
import App from '@/primary/App.vue';
import router from '@/primary/infrastructure/router';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives
});

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(vuetify).mount('#app');
