<template>
  <ContainerLayout>
    <form @submit.prevent="loginHandler">
      <InputField
        label="Email"
        placeholder="Enter registered email"
        type="text"
        v-model="email"
      />
      <p
        class="text-red-400 ml-1 mb-2 text-sm"
        v-if="
          errorMessage.includes('email') || errorMessage.includes('credentials')
        "
      >
        {{ errorMessage }}
      </p>
      <InputField
        label="Password"
        placeholder="Enter password"
        type="password"
        v-model="password"
      />
      <p
        class="text-red-400 ml-1 mb-2 text-sm"
        v-if="
          errorMessage.includes('password') ||
          errorMessage.includes('credentials')
        "
      >
        {{ errorMessage }}
      </p>
      <button
        class="border px-8 py-2 rounded-md uppercase text-sm font-semibold bg-white shadow-md"
      >
        Login
      </button>
    </form>
    <p class="text-sm py-5 text-center">
      Don't have an account?
      <router-link :to="{ name: 'SignUp' }" class="text-sky-700 underline"
        >sign up here</router-link
      >
    </p>
  </ContainerLayout>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from "vue";
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";
import { useRouter } from "vue-router";
import { SignUpT } from "../types/types";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = inject<SignUpT>("login");
const authState = inject<{ isAuthenticated: boolean }>("authState");

if (!authState) {
  throw new Error("authState is not provided");
}

const loginHandler = async () => {
  if (!login) {
    errorMessage.value = "Login function is not provided";
    return;
  }

  try {
    const user = await login(email.value, password.value);
    if (user) {
      router.push("/");
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Firebase: Error (auth/invalid-email)")) {
        errorMessage.value = "You entered an invalid email";
      } else if (
        error.message.includes("Firebase: Error (auth/missing-password)")
      ) {
        errorMessage.value = "You have entered a wrong password";
      } else if (error.message.includes("Error (auth/invalid-credential)")) {
        errorMessage.value = "You have entered invalid credentials";
      }
    } else {
      errorMessage.value =
        "An unexpected error occurred. Please try again later.";
    }
  }
};

onMounted(() => {
  if (authState.isAuthenticated) {
    router.push("/");
  }
});
</script>
