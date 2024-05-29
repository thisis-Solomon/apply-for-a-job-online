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

const email = ref("");
const password = ref("");

const login = inject("login");

const loginHandler = async () => {
  try {
    const user = await login(email.value, password.value);
  } catch (error) {
    console.error;
  }
};
</script>
