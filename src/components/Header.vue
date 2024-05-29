<template>
  <header class="bg-banner-mobile w-full h-36 bg-desaturated-dark-cyan">
    <ContainerLayout>
      <div class="flex items-center justify-between mt-5">
        <h1 class="text-3xl">
          <router-link to="/"> Apply4JobsOnline </router-link>
        </h1>
        <nav class="flex gap-16 text-lg items-center">
          <ul class="flex gap-8">
            <li>
              <router-link to="/"> Who's Hiring </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'CareerTips' }">
                Career Tips
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'TrendingJobs' }"
                >Trending Jobs</router-link
              >
            </li>
            <li>
              <router-link
                v-if="authState.isAuthenticated"
                :to="{ name: 'PostNewJob' }"
                >Post a Job</router-link
              >
            </li>
          </ul>
          <ul class="flex gap-8">
            <li
              class="border px-9 py-1 bg-transparent rounded-md outline-none border-very-dark-grayish-cyan font-bold text-light-grayish-cyan--filter-tablets tracking-wider hover:bg-light-grayish-cyan--filter-tablets hover:text-very-dark-grayish-cyan cursor-pointer hover:border-desaturated-dark-cyan transition-colors duration-200"
            >
              <router-link :to="{ name: 'Login' }"> Login </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </ContainerLayout>
  </header>
</template>

<script setup lang="ts">
import ContainerLayout from "./ContainerLayout.vue";
import { inject } from "vue";
interface AuthState {
  isAuthenticated: boolean;
}
const authState = inject<AuthState>("authState");

if (!authState) {
  throw new Error("authState is not provided");
}
</script>
