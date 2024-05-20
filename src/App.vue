<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="bg-light-rayish-cyan--background py-16">
    <router-view />
  </main>
</template>
