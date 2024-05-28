import { createApp } from "vue";
import "./style.css";
import { authState, signup, logout, login } from "./auth/auth.js";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .provide("authState", authState)
  .provide("signup", signup)
  .provide("logout", logout)
  .provide("login", login)
  .mount("#app");
