import { createApp } from "vue";
import "./style.css";
import { authState } from "./auth/auth.js";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).provide("authState", authState).mount("#app");
