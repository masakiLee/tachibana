import { createApp } from "vue";
import { createPinia } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "./assets/all.scss";

const app = createApp(App);

app.use(RouterLink, RouterView);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(AOS.init());
app.component("vueLoading", Loading);

app.mount("#app");
