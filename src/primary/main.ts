import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/primary/index.css";
import App from "@/primary/App.vue";
import router from "@/primary/infrastructure/router";
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
