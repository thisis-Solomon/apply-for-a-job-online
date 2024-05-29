<template>
  <ContainerLayout>
    <form @submit.prevent="loginHandler">
      <InputField
        label="Email"
        placeholder="Enter registered email"
        type="text"
        v-model="email"
      />
      <InputField
        label="Password"
        placeholder="Enter password"
        type="password"
        v-model="password"
      />
      <button
        class="border px-8 py-2 rounded-md uppercase text-sm font-semibold bg-white shadow-md"
      >
        Login
      </button>
    </form>
    <p class="text-sm py-5 text-center">
      Don't have an account
      <router-link :to="{ name: 'SignUp' }" class="text-sky-700 underline"
        >sign up here</router-link
      >
    </p>
  </ContainerLayout>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";
import { useRouter } from "vue-router";
import { SignUpT } from "../types/types";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = inject<SignUpT>("login");

const loginHandler = async () => {
  if (!login) {
    errorMessage.value = "Login function is not provided";
    return;
  }

  try {
    const user = await login(email.value, password.value);
    if (user) {
      console.log("User logged in successfully", user);
      router.push('/'); 
    } else {
      errorMessage.value = "Invalid email or password. Please try again.";
    }
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = `An error occurred during login: ${error.message}`;
    } else {
      errorMessage.value =
        "An unexpected error occurred. Please try again later.";
    }
    console.error("An error occurred during login:", error);
  }
};
</script>
