<template>
  <header class="bg-banner-mobile w-full h-36 bg-desaturated-dark-cyan">
    <ContainerLayout>
      <div class="flex items-center justify-between mt-5">
        <h1 class="text-3xl">
          <router-link to="/"> Apply4aJobOnline </router-link>
        </h1>
        <nav class="flex gap-16 text-lg">
          <ul class="flex gap-8">
            <li>
              <router-link to="/"> Who's Hiring </router-link>
            </li>
            <li>
              <router-link to="/"> Carrer Tips </router-link>
            </li>
            <li>
              <router-link to="/"> Job's Trending </router-link>
            </li>
          </ul>
          <ul class="flex gap-8">
            <li>
              <router-link to="/"> Login </router-link>
            </li>
            <li>
              <router-link to="/"> Sign up</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </ContainerLayout>
  </header>
</template>

<script setup>
import ContainerLayout from "./ContainerLayout.vue";
</script>
