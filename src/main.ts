import { createApp } from "vue";
import "./style.css";
import { authState, signup, logout, login } from "./auth/auth.ts";
import App from "./App.vue";
import router from "./router/index.js";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./auth/firebaseConfig.ts";

onAuthStateChanged(auth, (user) => {
  authState.isAuthenticated = !!user;
  console.log(user?.providerData);
});

createApp(App)
  .use(router)
  .provide("authState", authState as { isAuthenticated: boolean })
  .provide(
    "signup",
    signup as (email: string, password: string) => Promise<User | null>
  )
  .provide("logout", logout as () => Promise<void>)
  .provide(
    "login",
    login as (email: string, password: string) => Promise<User | null>
  )
  .mount("#app");
