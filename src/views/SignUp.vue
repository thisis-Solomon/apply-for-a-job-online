<template>
  <ContainerLayout>
    <form>
      <InputField label="Email" placeholder="Enter registered email" type="text" />
      <InputField label="Password" placeholder="Enter password" type="text" />
      <InputField label="Re-enter Password" placeholder="Enter password" type="text" />
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

<script setup>
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";
</script>
