<template>
  <ContainerLayout>
    <form @submit.prevent="signupHandler">
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
      <InputField
        label="Re-enter Password"
        placeholder="Enter password"
        type="password"
        v-model="reEnterPassword"
      />
      <button
        class="border px-8 py-2 rounded-md uppercase text-sm font-semibold bg-white shadow-md"
      >
        Sign up
      </button>
    </form>
    <p class="text-sm py-5 text-center">
      Already have an account
      <router-link :to="{ name: 'Login' }" class="text-sky-700 underline"
        >Login</router-link
      >
    </p>
  </ContainerLayout>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";
import { SignUpT } from "../types/types";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const reEnterPassword = ref("");
const passwordMatch = ref("");

const route = useRouter();

const signup = inject<SignUpT>("signup");

if (!signup) {
  throw new Error("signup function is not provided");
}

const signupHandler = async () => {
  if (password.value !== reEnterPassword.value) {
    passwordMatch.value = "Passwords do not match";
    return;
  }

  passwordMatch.value = "";

  try {
    const user = await signup(email.value, password.value);
    if (user) {
      route.push("/");
    } else {
      throw Error("Signup failed");
    }
  } catch (error) {
    console.log("An error occurred during signup:", error);
  }
};
</script>
