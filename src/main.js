import "./assets/tailwind.css";
import "./assets/main.css";
import "./assets/fonts.css";
// import "./assets/animate.css"

import "primevue/resources/themes/aura-light-indigo/theme.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");
