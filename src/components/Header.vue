<template>
  <header class="bg-banner-mobile w-full h-36 bg-desaturated-dark-cyan">
    <ContainerLayout>
      <div class="flex items-center justify-between mt-5">
        <h1 class="text-3xl">
          <router-link to="/">
            Apply4JobsOnline
          </router-link>
        </h1>
        <nav class="flex gap-16 text-lg items-center">
          <ul class="flex gap-8">
            <li>
              <router-link to="/" > Who's Hiring </router-link>
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
                v-if="authState?.isAuthenticated"
                :to="{ name: 'PostNewJob' }"
                >Post a Job</router-link
              >
            </li>
          </ul>
          <ul class="flex gap-8">
            <li>
              <router-link
                :to="{ name: 'Login' }"
                class="border-2 px-9 py-3.5 bg-transparent rounded-md outline-none border-very-dark-grayish-cyan font-bold text-light-grayish-cyan--filter-tablets tracking-wider hover:bg-light-grayish-cyan--filter-tablets hover:text-very-dark-grayish-cyan cursor-pointer hover:border-desaturated-dark-cyan transition-colors duration-200"
              >
                {{ authState?.isAuthenticated ? "Logout" : "Login" }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </ContainerLayout>
  </header>
</template>

<script setup lang="ts">
import { inject } from "vue";
import ContainerLayout from "./ContainerLayout.vue";

// interface AuthState {
//   isAuthenticated: boolean;
// }
const authState = inject<{ isAuthenticated: boolean }>("authState");

if (!authState) {
  throw new Error("authState is not provided");
}
</script>
