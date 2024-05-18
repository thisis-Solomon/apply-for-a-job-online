<template>
    <div class="flex gap-x-5 items-center">
      <img :src="job.logo" :alt="job.company" class="h-20" />
      <div class="flex flex-col gap-y-0.5">
        <h1 class="font-bold text-lg text-desaturated-dark-cyan">
          {{ job.company }}
          <span v-if="job.new" class="bg-desaturated-dark-cyan font-semibold text-sm text-light-rayish-cyan--background px-2 py-1 rounded-full uppercase ml-5">
            New!
          </span>
          <span v-if="job.featured" class="bg-very-dark-grayish-cyan font-semibold text-sm text-light-rayish-cyan--background px-2 py-1 rounded-full uppercase ml-2">
            Featured
          </span>
        </h1>
        <h2 class="font-bold text-lg hover:text-desaturated-dark-cyan cursor-pointer">
          {{ job.position }}
        </h2>
        <ul class="flex gap-2 text-dark-grayish-cyan items-center">
          <li>{{ job.postedAt }}</li>
          <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full"></span>
          <li>{{ job.contract }}</li>
          <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full"></span>
          <li>{{ job.location }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    job: Object,
  });
  </script>
  