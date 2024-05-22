<template>
  <ContainerLayout>
    <form>
      <InputField label="Email" placeholder="Enter registered email" />
      <InputField label="Password" placeholder="Enter password" />
      <button
        class="border px-8 py-2 rounded-md uppercase text-sm font-semibold bg-white shadow-md"
      >
        Login
      </button>
    </form>
    <p class="text-sm py-5 text-center">
      Don't have an account
      <router-link to="/" class="text-sky-700 underline"
        >sign up here</router-link
      >
    </p>
  </ContainerLayout>
</template>

<script setup>
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";
</script>
